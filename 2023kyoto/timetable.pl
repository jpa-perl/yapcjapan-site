use v5.36;
use utf8;

use Encode qw(encode_utf8);
use Text::CSV_XS qw( csv );

my $csv_data = csv (in => "./speakers.csv", headers => "auto");

my @json;
for my $row ($csv_data->@*) {

    # NOTE: 改行のエスケープしてあげると、タイムスケジュールページでも改行される
    my $description = $row->{description};
    $description =~ s/\n/\\n\\n/g;

    my $json =<<~"JSON";
        {
          talk_id: $row->{talk_id},
          title: '$row->{title}',
          description: "$description",
          duration: $row->{duration},
          authors: [
            {
              author: '$row->{author}',
              author_icon: './images/speaker/$row->{icon}',
              github_url: "@{[$row->{github_url}||'']}",
              twitter_url: "@{[$row->{twitter_url}||'']}",
              blog_url: "@{[$row->{blog_url} || '']}",
            }
          ],
        },
    JSON

    push @json => $json;
}

say encode_utf8 join "", @json;

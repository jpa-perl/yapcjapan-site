use strict;
use warnings;
use utf8;

use Encode qw( encode_utf8 );
use Text::CSV_XS qw( csv );


# SYNOPSIS
#
# 1. トーク一覧を元に、サイト掲載用に加工したCSVを用意する
#    例: https://docs.google.com/spreadsheets/d/19-imcqqErxuO0XTwSRpYdwG2xxWozgJ6em7J7Pc1kMI/edit#gid=1109186355
# 2. このスクリプトを使って吐き出したJSONを、data/pages/timetable.json5 のtalksフィールドに追記
#    (timetable フィールドに追記するデータは、未対応)
my $csv_data = csv (in => "./speakers.csv", headers => "auto");

for my $row ($csv_data->@*) {

    my $description = $row->{description};
    $description =~ s/\n/\\n\\\n/g;

    my $json = <<~"EOF";
        {
          talk_id: $row->{talk_id},
          title: "@{[$row->{title}]}",
          description: "\\
    @{[$description]}",
          duration: $row->{duration},
          authors: [
            {
              author: "@{[$row->{author}]}",
              author_icon: "@{[$row->{author_icon}]}",
              github_url: "@{[$row->{github}]}",
              twitter_url: "@{[$row->{twitter}]}",
              blog_url: "@{[$row->{blog} || '']}",
            },
          ]
        },
    EOF

    print encode_utf8 $json;
}


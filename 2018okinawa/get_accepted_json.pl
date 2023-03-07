#!/usr/bin/env perl
use v5.36;
use Text::CSV_XS qw(csv);
use JSON::PP qw(encode_json);

my %keymap = (
    id          => 'gsx$id',
    title       => 'gsx$title',
    description => 'gsx$description',
    talkTime    => 'gsx$talktime',
    startAt     => 'gsx$startat',
    trackId     => 'gsx$trackid',
    name        => 'gsx$author',
    timestamp   => 'gsx$timestamp', # not used
    author      => 'gsx$author',
    githubId    => 'gsx$githubid',
    twitterId   => 'gsx$twitterid',
    blogUrl     => 'gsx$blogurl',
);

my $speaker_csv_file = shift || "./speakers.csv";
if ( !-f $speaker_csv_file ) {
    die "do not find $speaker_csv_file\n";
}

# Text::CSV::csv returns utf-8 upgraded data by default.
my $csv_data = csv(in => $speaker_csv_file, headers => "auto");

my $entries = [];
for my $row (@$csv_data) {
    my $entry = {};
    for my $key (keys %$row) {
        $entry->{ $keymap{$key} }->{'$t'} = $row->{$key};
    }
    push @$entries, $entry;
}

my $root = {
    feed => {
        entry => $entries,
    },
};

# encode_json decodes utf-8 upgraded string and returns utf-8 downgraded binary sequence
say encode_json($root);

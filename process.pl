#!/usr/bin/env perl

use strict;
use warnings;

use Template::Mustache;
use File::Slurp qw/slurp/;
use JSON qw/decode_json/;
use Hash::Merge qw/merge/;

my ($tmpl_path, @data_path) = @ARGV;
die "tmpl_path and data_path are needed\n" unless ($tmpl_path && @data_path);
main->($tmpl_path, @data_path);

sub main {
    my ($tmpl_path, @data_path) = @_;
    my $tmpl = slurp($tmpl_path);

    my $data = {};
    for my $file (@data_path) {
        my $json = slurp $file;
        my $decoded = decode_json $json;
        $data = merge $data, $decoded;
    }

    my $r = Template::Mustache->render($tmpl, $data);
    print $r;
}

#!/usr/bin/env perl

use strict;
use warnings;

use Template::Mustache;
use Path::Tiny qw/path/;
use JSON5 qw/decode_json5/;

my ($tmpl_path, @data_path) = @ARGV;
die "tmpl_path is required\n" unless $tmpl_path;
main($tmpl_path, @data_path);
exit 0;

sub main {
    my ($tmpl_path, @data_path) = @_;
    my $tmpl = path($tmpl_path)->slurp_raw;

    my %data;
    for my $file (@data_path) {
        my $json = path($file)->slurp_raw;
        my $decoded = decode_json5 $json;
        %data = (%data, %$decoded);
    }

    my $r = Template::Mustache->render($tmpl, filter_data(\%data));
    $r =~ s!"((?:\.|/[^/]+)/(assets/[^"]+\.(?:css|js|gif|png|jpg|pdf)))"!'"'.$1.'?cachebuster='.pseudo_hash($2).'"'!meg;
    print $r;
}

# XXX: ほんとはmd5とかのがいいんだけどめんどい
sub pseudo_hash {
    my $path = path(@_);
    if ($path->exists) {
        my $fh = $path->openr_raw;

        my $context = 0x6F15A; # iv
        until (eof $fh) {
            read $fh, my $line, 2000;
            $context += $.;
            $context ^= $_ for unpack 'W*', $line;
            $context ^= length $line;
        }
        return $context;
    }
    return;
}

sub filter_data {
    my $data = shift;
    return $data unless ref $data;

    if (ref $data eq 'HASH') {
        my %hash;
        for my $key (keys %$data) {
            $hash{$key} = filter_data($data->{$key});
        }
        return add_pseudo_attribute(\%hash);
    }
    elsif (ref $data eq 'ARRAY') {
        my @array = map { filter_data($_) } @$data;
        return \@array;
    }

    return $data;
}

sub add_pseudo_attribute {
    my $hashref = shift;

    for my $key (keys %$hashref) {
        if (ref $hashref->{$key} eq 'ARRAY') {
            %$hashref = (%$hashref, %{ _add_pseudo_attribute_for_arrayref($key, $hashref->{$key}) })
        }
        elsif (ref $hashref->{$key} eq 'HASH') {
            %$hashref = (%$hashref, %{ _add_pseudo_attribute_for_hashref($key, $hashref->{$key}) })
        }
    }

    return $hashref;
}

sub _add_pseudo_attribute_for_arrayref {
    my ($key, $value) = @_;

    my %hash;

    $hash{$key.'@'.'size'} = @$value;

    return add_pseudo_attribute(\%hash);
}

sub _add_pseudo_attribute_for_hashref {
    my ($key, $value) = @_;

    my %hash;

    my @keys = grep !/\@/, keys %$value;
    $hash{$key.'@'.'keys'}   = \@keys;
    $hash{$key.'@'.'values'} = [@$value{@keys}];

    return add_pseudo_attribute(\%hash);
}

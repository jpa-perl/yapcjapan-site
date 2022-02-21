use strict;
use warnings;
use utf8;

use Encode qw( encode_utf8 );
use Text::CSV_XS qw( csv );
use feature qw(say);

# DESCRIPTION
#   配送リストを元に、オープンロジ配送用のCSVを作るくん
#
# e.g.
#    配送リスト(個人情報含むため閲覧制限あり)
#       https://docs.google.com/spreadsheets/d/1VhYim9E9vipNsIkza8ei65qupHRs43aewuZyr9XSFkI/edit#gid=1644006914
#
#    オープンロジ配送用のCSV
#       https://docs.google.com/spreadsheets/d/1VhYim9E9vipNsIkza8ei65qupHRs43aewuZyr9XSFkI/edit#gid=483167789
#       https://help.openlogi.com/s/article/000001105?language=ja
my $csv_data = csv (in => "./data2.csv", headers => "auto");

# Tシャツのサイズと、オープンロジに登録した商品IDのマップ
#
#   商品ID 商品名
#   4      YAPC::Japan::Online 2022 イベントTシャツ(Mサイズ)
#   3      YAPC::Japan::Online 2022 イベントTシャツ(Lサイズ)
#   2      YAPC::Japan::Online 2022 イベントTシャツ(XLサイズ)
#   20     YAPC::Japan::Online 2022 イベントTシャツ(XXLサイズ)
my $TSHIRT_SIZE_MAP = {
    M   => 4,
    L   => 3,
    XL  => 2,
    XXL => 20
};

my @ITEM_ID_LIST = (
    24,
    22,
    17,
    16,
    14,
    13,
    12,
    10,
    9,
    5,
);

for my $row ($csv_data->@*) {

    my ($size,$post_code,$prefectures,$address,$name,$phone_number) = $row->@{qw/
        size  post_code  prefectures  address  name  phone_number
    /};

    for my $item_id (@ITEM_ID_LIST) {
        say join ",", (
            $item_id,
            $post_code,
            encode_utf8 $prefectures,
            encode_utf8 $address,
            encode_utf8 $name,
            "'$phone_number"
        );
    }

    my $tshirt_id = $TSHIRT_SIZE_MAP->{$size};

    say join ",", (
        $tshirt_id,
        $post_code,
        encode_utf8 $prefectures,
        encode_utf8 $address,
        encode_utf8 $name,
        "'$phone_number"
    );
}


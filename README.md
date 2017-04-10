# yapcjapan-site-template

YAPC::Japanのサイトテンプレートとレンダラ。

生成物は docs ディレクトリに設置することで公開されるんじゃ！

# ディレクトリ構成

* `process.pl`, `process_v2.pl` - テンプレートをレンダしてくれる君
* `cpanfile` - 依存モジュールのリスト(scan-prereqs-cpanfileで更新するとイイヨ)
* `20XXcity/` - 各YAPC毎のディレクトリ
  * `generate_all_pages.sh` - 名前の通り全部のページをレンダリングしてくれる君
  * `data/` - テンプレートに入れるデータ
    * `*.json`
  * `template.mustache` - メインのテンプレート
  * `*.mustache` - テンプレートのパーツ

# 依存モジュールのインストール

```bash
cpanm --installdeps .
```

# つかいかた

* [https://mustache.github.io/](mustache)記法で書かれています
  * `{{variable}}`で変数埋め込み+α
* データ部分の記述は[http://json5.org/](json5)です（2017kansaiから）
  * もうケツカンマに悩まされる必要はないのです
* `20XXcity`ディレクトリに入って, `generate_all_pages.sh`を叩けばいいんじゃ!
  * その生成物をpushしましょう.

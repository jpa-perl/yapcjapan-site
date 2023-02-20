use v5.36;

use Web::Scraper;
use URI;

my $icon = scraper {
    process 'div.js-profile-editable-replace', "icon" => scraper {
      process "a", uri => '@href';
    };
};

my @github = qw(
https://github.com/mpppk
https://github.com/
https://github.com/rsym
https://github.com/kazeburo
https://github.com/usualoma
https://github.com/pastak
https://github.com/catatsuy
https://github.com/sadnessOjisan
https://github.com/dankogai
https://github.com/onk
https://github.com/komainu8
https://github.com/utgwkk
https://github.com/aereal
https://github.com/toyamarinyon
https://github.com/argrath
https://github.com/ar-tama
https://github.com/tarao
https://github.com/mackee
https://github.com/soudai
https://github.com/yusukebe
https://github.com/ryuichi1208
https://github.com/
https://github.com/
https://github.com/Songmu
https://github.com/koluku
https://github.com/Konboi
https://github.com/smt7174
);


for my $url (@github) {
    if ($url eq 'https://github.com/') {
        say 'dummy';
    }
    else {
        my $res = $icon->scrape( URI->new($url) );
        say $res->{icon}{uri};
    }
}


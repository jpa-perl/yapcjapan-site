#!/usr/bin/env sh

../process.pl ./template.mustache ./data/index.json ./data/sponsors.json ./data/menu.json  > ../docs/2016hokkaido/index.html
../process.pl ./template.mustache ./data/code-of-conduct.json ./data/menu.json > ../docs/2016hokkaido/code-of-conduct.html
../process.pl ./template.mustache ./data/sponsors_page.json ./data/sponsors.json ./data/menu.json > ../docs/2016hokkaido/sponsors.html
../process.pl ./template.mustache ./data/staff.json ./data/menu.json > ../docs/2016hokkaido/staff.html
../process.pl ./template.mustache ./data/timetable.json ./data/menu.json > ../docs/2016hokkaido/timetable.html
../process.pl ./template.mustache ./data/individual-sponsors.json ./data/menu.json > ../docs/2016hokkaido/individual-sponsors.html

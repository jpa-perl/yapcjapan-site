#!/bin/bash
set -ue

cd $(dirname $0)

OUTPUT_DIR=${OUTPUT_DIR:-"../docs/2017fukuoka_tmp"}

common_data=`echo ./data/{menu,buttons}.json5`
index_contents_data=`echo ./data/{sponsors,tickets}.json5`

# TODO: declare -a pages=(code-of-conduct individual-sponsors sponsors staff timetable)
declare -a pages=(staff sponsors individual-sponsors)

../process_v2.pl ./template.mustache ./data/pages/index.json5 $common_data $index_contents_data > $OUTPUT_DIR/index.html
echo "Created $OUTPUT_DIR/index.html"
for page in ${pages[@]}; do
  ../process_v2.pl ./2nd.mustache ./data/pages/$page.json5 $common_data > $OUTPUT_DIR/$page.html
  echo "Created $OUTPUT_DIR/$page.html"
done

# copy custom assets
find ./assets -type d -mindepth 1 -exec mkdir -p $OUTPUT_DIR/{} \;
find ./assets -type f -mindepth 1 -exec cp {} $OUTPUT_DIR/{} \;
echo "Copied assets to $OUTPUT_DIR/assets"

# copy sponsor menu
cp -f ./sponsor_menu.html $OUTPUT_DIR/sponsor_menu.html
echo "Copied sponsor_menu.html to $OUTPUT_DIR/sponsor_menu.html"

echo "Complete!"

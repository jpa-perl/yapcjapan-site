#!/bin/bash
set -ue

cd $(dirname $0)

OUTPUT_DIR=${OUTPUT_DIR:-"../docs/2022online"}
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

contents_data=`echo ./data/menu.json5`

#declare -a pages=(index staffs individual-sponsors talks timetable)
declare -a pages=(index timetable)

for page in ${pages[@]}; do
  ../process_v2.pl ./template.mustache ./data/pages/$page.json5 $contents_data > $OUTPUT_DIR/$page.html
  echo "Created $OUTPUT_DIR/$page.html"
done

# copy custom assets
find ./assets -type d -mindepth 1 -exec mkdir -p $OUTPUT_DIR/{} \;
find ./assets -type f -mindepth 1 -exec cp {} $OUTPUT_DIR/{} \;
echo "Copied assets to $OUTPUT_DIR/assets"

# copy senryu dir
mkdir -p $OUTPUT_DIR/senryu/dist
cp ./senryu/index.html $OUTPUT_DIR/senryu/index.html
cp ./senryu/dist/index.js $OUTPUT_DIR/senryu/dist/index.js
cp -r ./senryu/assets $OUTPUT_DIR/senryu
echo "Copied assets of senryu"

echo "Complete!"

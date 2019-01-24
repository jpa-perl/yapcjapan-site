#!/bin/bash
set -ue

cd $(dirname $0)

OUTPUT_DIR=${OUTPUT_DIR:-"../docs/2019tokyo"}
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

common_data=`echo ./data/menu.json5`
contents_data=`echo ./data/{buttons,sponsors,staffs,tickets}.json5`

#declare -a pages=(index staffs individual-sponsors talks timetable)
declare -a pages=(index individual-sponsors staffs talks timetable)

for page in ${pages[@]}; do
  ../process_v2.pl ./template.mustache ./data/pages/$page.json5 $common_data $contents_data > $OUTPUT_DIR/$page.html
  echo "Created $OUTPUT_DIR/$page.html"
done

# copy custom assets
find ./assets -type d -mindepth 1 -exec mkdir -p $OUTPUT_DIR/{} \;
find ./assets -type f -mindepth 1 -exec cp {} $OUTPUT_DIR/{} \;
echo "Copied assets to $OUTPUT_DIR/assets"

echo "Complete!"

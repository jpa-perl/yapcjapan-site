#!/bin/bash
set -ue

cd $(dirname $0)

OUTPUT_DIR=${OUTPUT_DIR:-"../docs/2019nagoya"}
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

# copy custom assets
find ./assets -type d -mindepth 1 -exec mkdir -p $OUTPUT_DIR/{} \;
find ./assets -type f -mindepth 1 -exec cp {} $OUTPUT_DIR/{} \;
echo "Copied assets to $OUTPUT_DIR/assets"

echo "Complete!"

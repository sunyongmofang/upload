#!/bin/bash

TMP_JS=".tmp.js"

while (($#)); do
    if [ "$1" = "--tissue" ]; then
        TISSUE=$2
    elif [ "$1" = "--js-path" ]; then
        JS_PATH=$2
    elif [ "$1" = "--load-images" ]; then
        LOAD_IMAGES=$2
    elif [ "$1" = "--video-path" ]; then
        VIDEO_PATH=$2
    fi
    shift
done

VIDEO_FILE=`ls ${VIDEO_PATH}/*.mp4`

echo > ${TMP_JS}

while read line
do
    cat ${JS_PATH}/${line} >> ${TMP_JS}
done < $TISSUE

casperjs \
    --cookies-file=.cookie \
    --disk-cache=true \
    --disk-cache-path=.diskCache \
    --ignore-ssl-errors=true \
    --load-images=${LOAD_IMAGES:-"true"} \
    --local-storage-path=.localStorage \
    --offline-storage-path=.offlineStorage \
    --local-to-remote-url-access=true \
    --ssl-protocol=ANY \
    ${TMP_JS} ${VIDEO_FILE//[[:space:]]/,}

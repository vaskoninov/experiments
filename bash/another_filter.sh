#!/bin/bash
#

shopt -s globstar nullglob

total_words=0

for file in ./**/*.md; do 
    if [ -f "$file" ]; then
        words=$(wc -w < "$file" | awk '{print $1}')
        if [[ $words -lt 200 ]]; then 
            echo "$file - $words"
        fi 
        total_words=$((total_words + words))
    fi 
done 

echo "total words in .md files: $total_words"


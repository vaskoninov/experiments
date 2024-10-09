#!/bin/bash
#
for file in *.md; do 
    if [ -f "$file" ]; then
        words=$(wc -w < "$file" | xargs)
        if [[ $words -lt 1000 ]]; then
            echo "$file: $words words" >> "stat.txt"
        fi
    fi 
done


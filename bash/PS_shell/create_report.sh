#!/bin/bash

if [[ ! $1 ]]; then
    echo "Error: missing parameter: container name"
    exit
fi 


container="$1"
directory="$2"
mkdir -p -- "$directory"  
# -p is an option allowing mkdir to not throw an error if reports dir already exists

if grep -- "$container" "$input_file" > "$directory/$icontainer.csv"
then
  echo "Wrote report $directory/$container.csv"
else
    echo "Container was not found at all in $input_file"
fi




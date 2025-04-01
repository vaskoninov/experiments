#!/bin/bash
container="$1"
directory="$2"
mkdir -p "$directory"  
# -p is an option allowing mkdir to not throw an error if reports dir already exists

grep "$container" shipments.csv > "$directory/$icontainer.csv"

echo "Report created $directory/$container.csv" 



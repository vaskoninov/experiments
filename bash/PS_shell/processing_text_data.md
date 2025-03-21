# Processing and Filtering Data with Bash

## Find and Locate

- find - `find / -type f -name '*.log'`
- `find . -maxdepth 1 -type f -name '*.md'` - for current directory
- find searches directories in real time
- locate uses its own internal DB

- locate is not pre-installed in Ubuntu or RedHat, there is also a cronjob appended with daily DB updates

## Cat, More, Less

- cat - reading files in Linux
- you can combine more than one files with cat command

- more
- less

- cat can create files and also concatenate several files into one

## Head and Tail
- you can combine more than one file with -v
- you can use -n to see specific number of lines and | to less

## Grep
- 
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

## Diff
- diff [options] [file1] [file2]

## NL
- displays file content with line numbers

## TR
- tr - translating or deleting characters from input

## SORT

## Uniq
sort file | uniq 
## Cut
- you can cut columns of a file or header, footer

## Paste
- you can merge lines

## Join
- similar to SQL command `join`
- join [file1] [file2] 


## Sed
- 

## Awk

```sh
awk 'BEGIN {FS=":"; OFS="\t" } {print $1, $2, $3, $6}' /etc/passwd
```
```sh
ll | awk 'BEGIN {sum=0} {sum = sum + $5} END {print sum}'
```

```sh
echo "Hello Merry Weather" | awk '{ print(substr($0, 1,5))}'
```
```sh
 echo "this is a string" | awk '{ if (length($0) > 10) print "string is too long"; else print length($0) }'
```

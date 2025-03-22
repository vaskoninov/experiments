```sh

echo $PATH

```

## Ls 

ls -A - hidden
ls -l - list files long details
ls -la

ls -t - sort by time
ls -S - size

ls -lSr - reverse


## Globbing

- add arguments to ls 

- ls -d Desktop - to list only directories, else lists files 
- ls -f Desktop - files 

### Wildcards
* - any character as many as available or not
? - single character
[...] - range of character
    [a-z]*.[A-Z] - example for ranges
(abc|def|ghi) - another type of grouping


## Commands
- find ~ -name cake.py
- find ~ -name '*f' -type d - to find directory with name wildcard and a type 
- you can use find with also -or operator between similar options like name 
- touch
- more - show percentage of the file that fits to the window
- less - similar
- head -n plus number provides number of lines, similar with tail
- tail - with -f you can follow the appended data at the end of the file in real-time
- wc - -l, -w, -b 

## Pipes and redirection

- |
- >
- >>

-0 stdin <
```sh
cat < linux < programmers > combined
```
-1 stdout - not needed to add   
-2 stderr - necessary to add 

- cat > some_file will allow to add text to a non-existing file and will create it

- tee - will redirect but also create - doing both at the same time
```sh
echo 'ada lovelace' | tee programmers
```
- will print and create a file

## Processing lines

- cut - -d is about separator; -f about column
- sort
- uniq
- tr - translate command - first arg is what , second is to what to translate, quote them

## Moving files

### File permissions
- chmod {file_permission} {file_name}
chmod [ugoa]+[wxr]

chmod absolute way - r=4, w=2, x=1


### Umask
- do not change it without a reason

## Copying files and directories

- cp 
- you can use cp -r to recursevily copy a directory

## Rsync
- rsync takes two arguments what to sync and where
- if you add -r option you can sync recursevily directories
- rsync -a creates an archive better than -r
- rsync -n creates a dry-run
- rsync -v verbose

## Moving files

- mv

## Linking files 

- hard links
- soft links 

ln - create link a hard one - point to the same data
link is a pointer to a file

ln -s - creates link a soft one 
- to directories or file as a shortcut
- contains the path to the file 
- if file is removed or moved it brakes
- use always relative paths
you can use ls -lL to see them

## Grep
- Global regular expression print 

grep -option(e.g.-i for case insensitive) {pattern} {file_to_search}

-w as option match the exact word
-r provides a recursevily search in a directory
-l provides just the files containing pattern not the specific lines

## Sed 

- editing text files
- works with input and output 
- operations are done line by line 

sed '{place_for_commands}' file_name 
`sed '' file_name` --> prints file to terminal

`sed 's/pattern_to_replace/pattern_to_replace_with' file_name'

`sed -n 's/pattern_to_replace/pattern_to_replace_with/p' file_name' - will print only replaced

-i as option will change the original file 

`sed -n '3,6p' file_name` - will print lines only between 3 and 6

`sed -n '/pattern_to_search/{g;p}; h' file_name` filters lines based on pattern 

## Awk

- programming language

awk 
`BEGIN {
print "execute before everything"
}
/expression/ {
print "execute on each line of the input stream"
}
END {
print "execute after everything"
}`
file_name 

- seems as simplified C 

- you can create scripts in it and run them with awk -f 
- ps | awk '{print $1}'
- awk -F ':' '{print $1}' /etc/passwd - change separator and prints content in column 1


## Diff 

- takes as two arguments two files
- -c option provides context print 
- -u gives similar view

## Compressing files 
- tar -group and archive 
- tar cvf name_of_archive files_to_be_archive
-z add gzip compression 
-j bzip2 
-t allows to view in archive 
-x extract files 

## Expanding

- echo {A..Z} will expand the whole alphabet
- echo {A..Z}{1..10} - nesting 

- xargs - do recursevily for each line 


## Processes and Jobs

- ps
- pgrep
- top
- htop

- ps aux | head
- ps aux | grap python











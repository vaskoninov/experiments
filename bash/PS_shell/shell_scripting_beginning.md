# Shell Scripting

## Intro

### Shebang

```sh
#!/bin/sh
```

```sh
chmod u+x {file}

./{file}
```

## Variables

```sh
greeting='hello'
echo $greeting

# if you have the following case
# bash will split by space and interpret each part 
# as command argument
files="file1 file2"
touch $files # will create two files - file1 and file2 

```

- some variables are predefined as `$USER` and they are always in upper-case
> [!Important]
> always use `echo` to inspect a value of a variable 

`-v` added to the shebang will print every line of the script 
`-x` also prints every line and also prints the value of the variables

> [!Important]
> every time you use variable surround by ""
> __DO NOT__ use '' because they will escape `$` and you will end up with a
> string containing $

- `shellcheck {file_name}` will show any mistakes or errors in the script 

> [!Important]
> adding `--` will mean end of options
> `grep -- `

## Printf

- works similarly to Java and Python - can take placeholders and arguments after the string


> [!Important]
> adding `{}` around a variable allows the shell to determine where the name of the 
> variable ends


- Using `export` on a variable, makes it available for all child processes

## If-then-else

```bash
if mkdir a; then echo "ok"; else echo "error"; fi
```

> [! Important]
> it is a good habit to always return a value with `exit` command from 
> the scripts. `0` is success, the others to `255` could mean anything

## Conditional expressions

||, &&, !
[[ ]]
[] if used, it is like you use `test` command - you need to put your variables in ""


-e - checks if file exists
-d - about directories

## Declare command

## Constants

`declare -i days=30` - create integer
`declare -xr ANSIBLE_CONFIG` makes a variable CONSTANT and read-only
## Arrays

- zero-based indexed or associative arrays

```bash

declare -a user_name
user_name[0]=bob; user_name[1]=smith
declare -a user_name=([0]=bob [1]=smith)

```
if you call ${user_name[@]} -> it will print every indexed joined by single space
if you call only the variable like `echo $user_name` it will return zero index
otherwise, you can echo the array by index 



__NB__ to create Associative Array 
```bash

declare -A user_name
user_name[first]=bob
user_name[second]=smith 

```













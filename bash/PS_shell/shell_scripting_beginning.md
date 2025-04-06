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

## Conditional Statements

- if else then elif else fi 

```bash

# older POSIX way
declare -i days=30
if [ $days -lt 1];then echo "Enter correct value";fi # single [] for simple checks 

if [ $days -lt 1] || [ $days -gt 30 ];
then echo "Enter correct value"; fi 


# modern Bash/Zsh way

declare -i days=30
if (( days < 1 || days > 30 ));
then echo "Enter correct value"; fi 
```
- AND / OR 

```bash

echo hello || echo bye
echo hello && echo bye 
```
- Arithmetic evaluations
- Regex
- test 
- string comparisons
- CASES 

> [! Important]
> $? prints the result of the last command 

> [! Important]
> use `read` to read user input 

## Strings and Regex 
[[]] - for partial strings, regex and advanced conditionals

```bash

declare -l user_name
read user_name
Bob

[ $user_name == 'bob' ] && echo "user is bob"
user is bob


declare -l browser
read browser
Firefox

[[ $browser == *fox ]] && echo "The broweser's Firefox"

declare -l test_var
read test_var 
color

[[ $test_var =~ colou?r ]] && echo "${BASH_REMATCH[0]}" # BASH_REMATCH is the match array

color 

```
> [! Important]
```bash 
[[ $user == *potter* ]]
result=$?  # $? contains the exit status (0 for true, 1 for false)

if (( result == 0 )); then
    echo "Yes"
else
    echo "No"
fi
```




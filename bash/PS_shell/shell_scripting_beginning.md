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

- `shellcheck {file_name}` will show any mistakes or errors in the script 

























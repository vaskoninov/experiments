# Used with curly brackets
#
# ${varname:-word} - if exists and not null, return value, else return word
# ${varname:=word} - if exists and not null, return value, else assigns word to var and returns, cannot assign positional arguments or special params
# ${varname:?message} - if exists and not null, return value, else print varname and message
# ${varname:+word} - if exists and not null, return word, else return null
# ${varname:offset:length} - returns a substring
#

sort -nr $1 | head -${2:-10}
# sorts data in filename in $1
# -n sort intepretes the first word on each line as a number
# -r sort to revers the comparison => descending order
# head -N prints the n number of lines
#
# We can optimize through adding comments and vars
#
filename=$1
howmany=${2:-10}

sort -nr $filename | head -$howmany

# We can further add optimizations
# add check if user included arguments
#
filename=$1
filename=${filename:?"missing"}

howmany=$2
sort -nr $filename | head -${howmany:=10}

## Patterns and Matching
#
# ${var#pattern} - if matches beginning of var value, delete the shortest part that matches and return the rest
# ${var##pattern} - same, delete the longest part and return the rest
# ${var%pattern} - delete the shortest from the end and return rest
# ${var%%pattern} - delete the longest from the end and return rest
# ${var/pattern/string} - longest match is replaced by string (only the first match)
# ${var//pattern/string} - same, all matches replaced

outfile=${filename%.pcx}.jpg
bannername=${pathname##*/}

# UNIX dirname => ${var%/*}
# UNIX basename => ${var##*/}
#
echo -e ${PATH//:/'\n'} #LINEFEED to print all folders in PATH


























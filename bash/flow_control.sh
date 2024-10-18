# Flow Control
#
# if/else
if condition
then
    statements
[elif condition
then statements]
    [else statements]
fi 

pushd ()
{
    dirname=$1
    if cd ${dirname:?"missing directory name."}
    then
        DIR_STACK="$dirname ${DIR_STACK:-$PWD' '}"
        echo $DIR_STACK
    else
        echo stil in $PWD.
    fi 
}

popd ( )
{
    if [ -n "$DIR_STACK" ]; then
        DIR_STACK=${DIR_STACK#* }
        cd ${DIR_STACK%% *}
        echo "$PWD"
    else
        echo "stack empty, still in $PWD."
    fi
}
# for 
for name [in list] #it defaults to $@
do
    statements that can use $name...
done
# while 
# until 
until cp $1 $2; do
    echo 'Attempt to copy failed. waiting...'
    sleep 5
done 
# case 
#
case expression in
    pattern1 )
        statements ;;
    pattern2 )
        statements ;;
        ...
esac
 
# select
select name [in list]
do
    statements that can use $name...
done 

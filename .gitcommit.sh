!/bin/bash
# lines that start like this are shell comments
# read projects current directory with $PWD
echo "running command from" $PWD
cd $PWD
git add .
echo "Commiting ..."
git commit -m "$1"
echo “files have been successfully commit with message : $1"
git push
echo “Files have been successfully pushed ! $1"
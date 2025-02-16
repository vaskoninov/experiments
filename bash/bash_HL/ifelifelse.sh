#!/bin/bash

if [ ${1,,} = herbert ]; then
      echo "Oh, good job and welcome!"
elif [ ${1,,} = help ]; then
  echo "Enter your username" 
else
      echo "I don't know you"	
fi

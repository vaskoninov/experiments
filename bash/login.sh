#!/bin/bash


case ${1,,} in
	herbert | administrator)
		echo "Hello, admin!"
		;;
	help)
		echo "Just enter your credentials"
		;;
	*)
		echo "Hello, enter username!"
esac

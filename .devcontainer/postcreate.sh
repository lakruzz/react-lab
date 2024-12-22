#!/bin/bash --login


git config --local --get include.path | grep -e ../.gitconfig || git config --local --add include.path ../.gitconfig


# if there is a package.json file, install the dependencies in the container
if [ -f "package.json" ]; then
    npm install
fi


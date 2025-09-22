#!/bin/bash
# count_files.sh — count number of regular files and directories in the current directory (non-recursive)
# Usage: ./count_files.sh
find . -maxdepth 1 -mindepth 1 \( -type f -o -type d \) | wc -l | xargs


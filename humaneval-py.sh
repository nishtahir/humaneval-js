#!/bin/bash

set -e

# Directory containing Python scripts
directory="HumanEval"

# Loop through all Python files and execute them
for f in "$directory"/*.py; do
   echo "Running: $f"
   python "$f"
done

set +e
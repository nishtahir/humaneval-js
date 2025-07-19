#!/bin/bash

set -e

directory="HumanEvalJs"
for f in "$directory"/*.js; do
   echo "Running: $f"
   node "$f"
done

set +e

#!/bin/bash
cd /home/kavia/workspace/code-generation/mathmind-challenge-95174-95181/main_container_for_mathmind_challenge
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


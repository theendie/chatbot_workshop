#! /bin/bash

echo "Starting chatbot-witai"

docker build \
  -t "chatbot-witai" \
  -f Dockerfile .

docker run \
  -it \
  -v "/$(pwd):/usr/projects/chatbot-witai" \
  --env-file ".env" \
  -m "500M" \
  --memory-swap "500M" \
  chatbot-witai

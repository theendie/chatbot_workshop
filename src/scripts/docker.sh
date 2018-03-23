#! /bin/bash

echo "Starting chatbot-witai"

docker build \
  -t "chatbot-witai" \
  -f Dockerfile .

docker run \
  -e "NODE_ENV=production" \
  --env-file ".env" \
  -m "500M" --memory-swap "1G" \
  -p "3000:3000" \
  chatbot-witai

#!/bin/sh
cat .env | sed 's/^/export /g' | sed 's/=/=\"/g' | sed 's/$/"/g'

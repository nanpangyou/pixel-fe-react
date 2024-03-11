#!/bin/bash
rm -rf dist
pnpm build
cd dist
git init
git add . 
git commit -m 'deploy to github page'
git remote add origin git@github.com:nanpangyou/pixel-fe-react-preview.git
git push -u origin main -f
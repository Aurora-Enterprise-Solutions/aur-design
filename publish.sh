vue-cli-service build --target lib --name aur-design ./index.js;

git add dist/;
git commit -m "dist Updated";

np --skip-2fa --no-publish;
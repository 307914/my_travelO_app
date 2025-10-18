
echo "Navigating to client";
cd ../tavel_app_front_end;
npm install;

echo "Running production build";
npm run build;

echo "Removing prev build dir from server";
rm -r ../backend/build;

echo "Moving the prod build from client to server";
mv build ../backend/;

cd ../backend;

npm install;


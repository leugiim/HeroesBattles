ROOT_PATH=$(pwd)
echo $ROOT_PATH

cd $ROOT_PATH/client
npm run fix

cd $ROOT_PATH/server
npm run fix

cd $ROOT_PATH/shared
npm run fix
Api loadmore : https://randomuser.me/api/?page=0&results=10

VD: scroll more && click button more


// Link custom env 
//https://www.opcito.com/blogs/managing-multiple-environment-configurations-in-react-app

    "start:development": "env-cmd -f .env.development npm run-script build",
    "build:staging": "env-cmd -f .env.staging npm run-script build",
    "build:qa": "env-cmd -f .env.qa npm run-script build",
    "build:production": "env-cmd -f .env.production npm run-script build",
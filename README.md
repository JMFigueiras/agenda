# seed-backoffice-react
The seed-backoffice-react use React. The client side libraries are managed by Webpack and the render is processed in the client side powered by React.

## setting dev environment
Environment tools required to use this project:

    npm install -g gulp-cli

After clone this project you should install the npm packages and bower packages.

    npm install

To run the app you should use this command.

    npm start

## Running the test suite.

    npm test

## building and release

    npm run build

Copy the content of the *dist* folder into the prod server and install the npm packages with the *production* flag.

    npm install --production

For run with PM2 in a Linux environment:

    npm install -g PM2
    PM2 start index.js --name application

Or in a Windows environment:

    npm start

To clean the local *dist* folder after deploy use:

    gulp clean:dist

# Architecture

## public
This is all the client side content, the user can access this content freely.
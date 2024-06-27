## Steps to Update Server and Client Configuration

1. Update Client Environment Variables:

   - Ensure your .env file in the client/ directory contains:
   ```rust
   REACT_APP_SERVER_URL='https://your-server-url.vercel.app'
   ```
   - Replace your-server-url with the actual Vercel server URL.

2. Update Server Environment Variables:

   - Ensure your .env file in the server/ directory contains:
   ```arduino
   MONGO_URI='your-mongodb-uri'
   JWT_SECRET='your-jwt-secret'
   ```
   - Add any other environment variables required by your server.

3. Update Client Fetch Requests:

   - Ensure all fetch requests in the client code use process.env.REACT_APP_SERVER_URL to refer to the server URL.

4. Deploy Server to Vercel:

   - Deploy your server to Vercel following their deployment guide.
   - [Using Express.js with Vercel](https://vercel.com/guides/using-express-with-vercel)
   - Ensure that the environment variables are set correctly in the Vercel dashboard for your server deployment.

5. Build and Deploy Client:

   - Navigate to the client/ directory and run:
   ```bash
   npm run build
   npm run deploy
   ```

6. Test the Application:

   - Access your client application hosted on GitHub Pages.
   - Verify that it can successfully make requests to the server hosted on Vercel and that all functionality works as expected.
By following these steps, you ensure that your client application uses the correct server URL in a production environment.


#### Available Scripts

 - In the project directory, you can run:

```bash
npm start
## Runs the app in the development mode.\
## Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
## The page will reload when you make changes.\
## You may also see any lint errors in the console.

npm test
## Launches the test runner in the interactive watch mode.\
## See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

npm run build
## Builds the app for production to the `build` folder.\
## It correctly bundles React in production mode and optimizes the build for the best performance.
## The build is minified and the filenames include the hashes.\
## Your app is ready to be deployed!
## See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

npm run eject
## **Note: this is a one-way operation. Once you `eject`, you can't go back!**
## If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
## Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
## You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

npm run build ## fails to minify
## This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

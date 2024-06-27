## Steps to Host Client on GitHub Pages

1. Build the React Client Application:

   - Navigate to your React client's root directory and run:
   ```bash
   npm run build
   ```
   - This command creates a build directory with a production build of your app.

2. Install gh-pages Package:

   - In your React client directory, install the gh-pages package:
   ```bash
   npm install --save gh-pages
   ```
3. Update package.json:

   - Add the following lines to the scripts section of your package.json file:
   ```json
   "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
   }
   ```
   - Add a homepage field to your package.json file, replacing <username> and <repository> with your GitHub username and repository name:
   ```json
   "homepage": "https://<username>.github.io/<repository>"
   ```
4. Deploy the React Client Application:

   - Run the following command to deploy your app to GitHub Pages:
   ```bash
   npm run deploy
   - This command builds your app and pushes the contents of the build directory to the gh-pages branch of your repository.

5. Enable GitHub Pages:
   - Go to your GitHub repository.
   - Navigate to Settings > Pages.
   - In the Source dropdown, select the gh-pages branch and click Save.

6. Update Client Fetch Requests:
   - Ensure all fetch requests in your client code use the environment variable REACT_APP_SERVER_URL to refer to the server URL.
   - Example in your React code:
   ```javascript
   const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/endpoint`);
   ```

7. Set Up Environment Variables:
   - Ensure your .env file in the client/ directory contains:
   ```rust
   REACT_APP_SERVER_URL='https://your-server-url.vercel.app'
   ```
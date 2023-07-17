# 99c Frontend Assessment

## Instructions
Client has asked us to develop an application for 2 platforms - web (via a Progressive web app) and desktop (via an Electron app)

The app has three simple views:
1. Splash page
2. Entry page
3. Thanks page

Splash page will be static and will have a button to enter the app.

Entry page will have a form with 4 fields:
1. First Name
2. Last Name
3. Email address
4. A space to include files (images, pdfs, etc)

The files can either be selected via a file picker or drag and drop.

When files are selected, the system should filter out any files that are not images or pdfs.

The resulting files should be included in the payload to the backend.

When the form is submitted, the app will send the data to a server and display the response from the server.

The backend does not need to be created.You can assume that the backend has the following routes:

```/api/entry``` - POST

```/api/fileupload``` - POST

Schema is
```
{
  firstName: string,
  lastName: string,
  email: string,
  files: File[]
}
```

Note - there is no actual backend to post to, but the code needs to be written as if there is.

Validation rules:
1. First Name and Last Name are required
2. Email address is required and must be a valid email address
3. At least 1 file is required

The files should be uploaded one at a time, with the app waiting for a success 200 message to continue to the next one. Once all files are done, the app should move to the Thanks page.

Thanks page will have a button to go back to the splash page.

### Technologies to be used
1. Quasar 2 with VueJS 3
2. Axios or other comms library
3. Electron or other desktop JS framework

Look and feel is less important than code, but please use quasar components where applicable.

Please make your code available on a public git repo (github, gitlab, bitbucket, etc) and send us the link.

I should be able to npm install the dependencies and run the app in both PWA and Electron modes.
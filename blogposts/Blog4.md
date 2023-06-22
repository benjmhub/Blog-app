---
title: 'The easiest way of uploading image and audio files together using Multer, Cloudinary, and Node.js.'
date: '22 June'
---

The project list📃 of a backend web developer always includes projects on REST API and other websites projects such as E-commerce with fully functional backends. One main functionality of these kinds of projects is file uploading such as image, audio, video, etc. 

When working with MERN stack one of the most common and popular way of uploading a file is using-

- [Node.js](https://www.w3schools.com/nodejs/nodejs_intro.asp).
- [Multer](https://expressjs.com/en/resources/middleware/multer.html#:~:text=Multer%20is%20a%20node.,multipart%2Fform%2Ddata%20).
- [Cloudinary](https://cloudinary.com/documentation/node_quickstart).

The most probable solutions for uploading a file found on the internet are-

- [Uploading single or multiple image using multer, cloudinary and node.js](https://www.geeksforgeeks.org/how-to-upload-single-multiple-image-to-cloudinary-using-node-js/).
- [Uploading an audio file using multer, cloudinary and node.js](https://cloudinary.com/documentation/node_image_and_video_upload)

You have to search a lot to find the perfect solution for uploading the image and audio file together using multer, cloudinary and node.js.

I hope that this blog of mine is going to help most of the backend web developers for easily uploading the image and the audio file together using multer, cloudinary and node.js.

## Prerequisites
- Node.js and Express.js
- Multer
- Cloudinary

## Let us start with uploading the image and audio file 

First of all let's setup the express app. Following are the steps to create an express app. 

- Create a folder `server` which contains a `server.js` file which will be the root file. 

- Run the following command to initiate the node modules.

```
npm init
npm i
npm i node-modules
```
- Install express using following command.

```
npm i express
```
- Setup the express app in the following way.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/40adm59824jae2wft0ko.png)

Once the initial setup is done we will move further with the:-
- Addition of middlewares such as `app.use(express.json())` and `app.use(express.urlencoded({extended: true}));` and connection of mongodb using mongoose in `server.js` file.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k45653l15w5es701x1cs.png)

- In the following way the routes setup is done.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7og8xfsdcne2f235dkdk.png)

**Now lets setup the Multer file which is in the middlware folder.**
For uploading the image and audio file together we are going to use a third party dependency namely [multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)

In the following way the multer setup is done using the third party dependency.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ips7opiq39z2ajyvuny.png) 

Now we will use the `upload.fields` as a middleware.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/80lp17l4vko49i4sxa6q.png)

We are also going to setup the cloudinary in the `cloudinaryconfig.js` file so as to use it as a middleware in the `server.js` file.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/969eff5botukmjbiivzl.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1sd173tkll5hiabh7ux8.png)

Once the setup of Multer, Cloudinary is done we will take a quick peek of the `controller.js`.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8pf2kfz719u1l1flxr6e.png)

In the `uploadcontrol.js` file:-
- First of all we have created an async function namely **Create**.
- Then we have stored the path of both the image and the audio file in the constants **imageurl** and **audiourl**.
- In the last step we have stored the value of both imageurl and audiourl in the **Uploads** db.

Once the entire setup is done we will check the **upload** request on **Postman**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0qi2imscymvi4p6afmbv.png)

Hurrey!🥳🥳 we are successfully receiving the url of both the files.
And also getting the url stored in mongodb.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z0m07vy504g3voux0tbj.png)

So I hope that this tutorial is going to help all the backend web developers out there in uploading the image and audio file together using Multer, Cloudinary and Node.js
 


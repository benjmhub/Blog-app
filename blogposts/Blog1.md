---
title: 'User authentication in MERN stack (Backend)'
date: '22 May'
---

In this tutorial, we will dive into the fundamentals of user authentication, covering key concepts such as registration, login, password hashing. It will guide you through the process of setting up a secure authentication system, from building the backend API using Node.js and Express.js to creating a user-friendly frontend with React.

Whether you are a beginner looking to gain a solid foundation in user authentication or an experienced developer seeking to enhance your skills with the MERN stack, this tutorial will provide you with the knowledge and tools necessary to implement robust user authentication in your web applications.


## Prerequisites:

- [Node.js](https://www.w3schools.com/nodejs/nodejs_intro.asp)

- [Express.js](https://www.geeksforgeeks.org/express-js/)

- [MongoDB](https://www.mongodb.com/what-is-mongodb)

- [Postman](https://www.postman.com/product/what-is-postman/)


## Folder Structure

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o7x3mci8hz4o2v74i1ot.png)

The folder structure for user authentication of **mern** website  contains:

- A `server.js` file - where the main express app is initiated.
 

- A `model folder` - which contains all _mongodb documents Schema files_ in which the _documents  schemas_ are defined.

- A `router folder` - which contains all route files where  _routes are defined_.
 

- A `controllers folder` - which contains all controller files where the _authentication logic is written_.

### Server.js
As mentioned above in `server.js` file the express app is initiated.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/udow555w46r9hd9ia0gw.png)

To start with the `server.js` we first of all need to import all necessary dependencies such as:

- [mongoose](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

- [express](https://www.geeksforgeeks.org/express-js/)

- [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- [body-parser](https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b73nzce9sbz9t9d57w2q.png)

After importing all the necessary dependencies we have used _middleware_ such as 

- `app.use(bodyParser.urlencoded({ extended: true }))` - to parse URL encoded data 

- `app.use(bodyParser.json())` - to parse json data.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p0kz8i8xs5t366gaswgv.png)

We have also created post request for _api/podcasts,login,signup_. 
After that we have made connection with mongoDB database _(cloud i.e atlas or compass)_ .

### userSchema.js
The `userSchema.js` file is in the _models folder_ where the schema for user authentication is defined.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/66evpldt50zsjc0hrj1q.png)

In `userSchema.js` first of all we import _mongoose_ which is used to create the schema. Then we create the schema having fields username, email, password and confirmpassword.

### user.js
The `user.js` file is inside the _routes folder_ where routers for login and signup are defined.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sub633b6dmnku25tpr57.png)

In `user.js` first of all we import express which is required for creating routes. Then we import the login and signup controllers from `Usercontroller.js`. Then we create router using `express.Router()`. After that we create routers for login and signup.

### Usercontroller.js
The `Usercontroller.js` file in _controllers folder_ contains the logic of login and signup.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pu5egemjqylhvpcq3f9w.png)

To start with the user controller we first of all import all necessary dependencies such as:

- [jwt](https://jwt.io/introduction)

- [bcrypt](https://dev.to/jyeett/what-is-bcrypt-and-why-2dd1)

#### Signup Logic

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p1cogaa7irhyb3ctjis1.png)

1. Get the values of field such as username, email, password and confirmpassword using `req.body`
2. Check for the empty fields.
3. If any empty field is present throw error `('Please fill the field')`
4. Check whether the entered email by the user is present in the databse or not.
5. If the entered email is already present in the database than return `res.status(400).json('Email already exist')` .
6. If the entered email is not present in the database than create the instance of the schema model and pass the new values.
  `const user = new User({
                    username:username,
                    email:email,
                    password:password,
                    confirmpassword:confirmpassword
                })`
7. Create the salt value using `await  bcrypt.genSalt(10)`.
8. Then we create hash value using `await bcrypt.hash(password,salt)`.
9. Once the hash value is created we store it as the user password `user.password = hash`.
10. After that we save the instance of the schema `user.save()`.

#### Login Logic

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6n3qjkq9gq1gx0jcvoob.png)

1. For the login we first get the values of fields using `req.body`.
1. Check for the empty fields
1. if any empty field is present than throw error `('Please fill the field')`.
1. Check if the entered email by the user is present in the database or not.
1. If the entered email is not present than throw err `return res.status(404).json({error:"User not found"})`.
1. If the entered email is present than compare the entered password and the hash password using `bcrypt.compare`.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rkegeqw5ktc4ff790zv8.png)

So in this tutorial we have covered the backend part of user authentication in MERN where we have seen the folder structure of the backend, also Schema for document, routes and controllers(logic of Signup and login).

**In the second part of this blog we are going to see frontend and the backend connection.**
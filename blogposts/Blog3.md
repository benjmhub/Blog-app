---
title: 'User authentication in MERN stack (Frontend and Backend connection)'
date: '14 June'
---

Throughout this informative journey of User authentication in MERN stack till now we have seen-
- [User authentication in MERN stack (Backend)](https://dev.to/itsfarhankhan28/user-authentication-in-mern-stack-part-1-4bj3)

- [User authentication in MERN stack (Frontend)](https://dev.to/itsfarhankhan28/user-authentication-in-mern-stack-frontend-1c14)

In this tutorial we will be concentrating on the Frontend and the Backend connection.

- We will take a closer look at the CORS error and also the solution for the same.

## Prerequisites

- Basic understanding of **form handling** in react.([Form handling](https://www.w3schools.com/react/react_forms.asp))

## So lets begin with the connection.

### Signup Form
First of all we will create a function to handle the form on submit.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/chuik9h26of36fd1knor.png)

In this function-
- First we are taking the values of all the fields.
- Then asynchronously using async and await we are setting up the fetch function where 

 - First parameter is the URL of the backend server.
 - Then we specify the method i.e `method:"POST"`.
 - After specifying the method we set the headers i.e `headers:{
            "Content-Type":"application/json"
        }` and send the content of the field in the string format 
   using `body:JSON.stringify({
            username,  email , password , confirmpassword
        })`

Once the function is completed we will call it from the Submit button using `onClick`.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p7ujyj3lpp6167pagxmv.png)

### Login Form
The setup of the function which handles the form on submit is similar to the signup form `onRegister` function.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bcgapm4u5v3c5liu3k89.png)

And once the function setup is done we call the function in the submit button similar to signup form.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rau398nir2es9u7noqlc.png) 

Once the login and the signup form setup is completed the major part is handling the **CORS** error.

Now lets take a quick peek at the **CORS** error:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qc35yuqee7zv8f4v1q5y.png)

The CORS error can be solved by adding the **Proxy server** in the `package.json` file of the _Client side_

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ap8kiaamvf3edciubqm.png)

So in this tutorial we have seen the connection of Frontend and Backend. We have covered -
- The setup of the function that handles the login and the signup form on submit.
- The CORS error. Also the solution for the same.

With this, we have completed the user authentication in MERN stack.

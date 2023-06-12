---
title: 'User authentication in MERN stack (Frontend)'
date: '4 June'
---

> [User authentication in MERN stack (Backend)](https://dev.to/itsfarhankhan28/user-authentication-in-mern-stack-part-1-4bj3)

Before starting with this tutorial we will take a quick peek at what we saw in the last tutorial

In the last tutorial, we covered the backend logic of Signup and Login. We saw-

- Folder structure for Backend 📂
- Concept of Server.js file where the express app was defined.
- Building of Schema.
- Routes of Login and Signup.
- Controllers that contain the Signup and Login logic.

### What are we expecting from this tutorial?
In this tutorial, we will take a deep dive into the frontend of user authentication which contains the login and signup form.

The takeaway points from this tutorial are-

- How to create a react app using **Vite** rather than **CRA(create-react-app).**
- How to set up the Login and Signup form.
- How to set up Router.  

## Prerequisites
- A basic understanding of React. [(React)](https://www.w3schools.com/whatis/whatis_react.asp)
- How Components and Pages are created in react. [(Components in React)](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)

## Folder Structure

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j31v54c0gdor84l0r11h.png)

The above image gives a glimpse of what the folder structure of the frontend consists of. It consists of -

- **Assets folder**📂 - It consists of `Images folder` where all images are stored

- **Components folder**📂 - It consists of `Navbar.jsx` file.

- **Pages folder**📂 - It consists of `Login.jsx` and `Signup.jsx`.

- Other files - App.css, App.jsx, main.jsx, index.css.

## Setting up the react app with Vite
At this point, a fascinating query may arise if we already have **CRA** to create a react app then why use **Vite**

<img width="100%" style="width:100%" src="https://media.giphy.com/media/a5viI92PAF89q/giphy.gif">

Here's a simpler answer to that

> _Vite uses the esbuild bundler, which is much faster than the Webpack used in CRA._

In other words, we can say that a React app can be built faster using Vite as compared to CRA.

#### the Following command is used to create React app using Vite

```HTML
npm create vite
```
After running the above command 

- Enter the _project name_ .

- Select the _framework_ you want to work with.

- Select the variant for eg- **Javascript** or **Typescript**. 

## Components
Before starting with `Navbar. jsx` which is a component let's see a short description of what are **Components** in react

> _Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML_.

### Navbar.jsx

As per the definition of components which says that components are _reusable bits of code_ hence the `Navbar.jsx` is created as a component we do not have to write its code for all pages.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ek04i6zxwdicrg2ys76e.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xpcwfvrgpblj5orgorzp.png)

## Pages
Both the Signup and Login page are created using **Ant Design**. To make development more faster you can use either _Material UI_ or _Ant Design_ .

Let's take a quick peek at what is Ant Design.

> _Ant Design is an open-source design system developed by the Ant Group–parent company of Alibaba, Alipay, Huabei, and MYbank, to name a few._

### Signup.jsx

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7nxdedaey58q324hghzb.png)

Starting with the Signup form first of all we import all necessary components required for the form from `antd`. 
Then for the better understanding of the form fields we import all necessary icons from `@ant-design/icons`

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/78e97alklugqj15rj2u1.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/glvcxh0wm4qy2qucc5vt.png)

Once all necessary components and icons are imported we set up the form by adding **username**, **email**, **password** and **confirm password** fields and applying the operations of each field provided by Ant Design.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p88w6ls4nd9g8oxjlrc4.png)

### Login.jsx

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/av7i90xhuo234jkujg37.png)

Similar to Signup form in the Login form also we first of all import all necessary components and icons.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ice8vgudbhjhz9nddfpo.png)

Login Form is also set up by adding the email and password field and applying their operation provided by Ant design.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vy0hpfi4xlf75o7hgka3.png)

## Router Setup
To link the pages with each other in react we use **react-router**

Let us first have a look at what is **react-router**

> _React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page_ .

First of all install the react-router from following command

```
npm i react-router-dom
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xd0ijgtj9pfjq0graour.png)

Starting with the router setup-

- First import all the pages that are homepage, login, signup.
- Import **createBrowserRouter** and **RouterProvider** from `react-router-dom`.
- Then using `createBrowserRouter` create the array of _paths_ and _elements_ and assign it to the **router**.
- Configure the route using `RouterProvider`.

So, In this tutorial we saw -

- Folder structure of frontend 📂.
- Creating react app with Vite.
- Components and Pages.
- Creating Router.

Stay tuned for next tutorial of User authentication with MERN. As in the next tutorial we are going to focus on the connection of frontend and backend. See you all in the next tutorial.

# emaily_node_react_app

Web App developed in the Udemy course "Node with React: Fullstack Web Development" - Instructor: Sthepen Grider.

It's able to maintain surveys, buy credits with real payment, send e-mails and handle webhooks.

Link of the course: https://www.udemy.com/node-with-react-fullstack-web-development

## Technologies

### Front-End

React, Redux, MaterializeCss

### Back-End

Node, Google Authentication API, Stripe (to payments), mailGun (send e-mails, handle webhooks)

### Data Base

MongoDB as a service in mLab.com

### Deploy

Prod environment in heroku.com / Dev environment in localhost using LocalTunnel for webhooks purpose

## Tips for run locally

To run locally, you should create a dev.js file inside config folder, where you to declare the same variables in prod.js file. 

Instead of keeping process.env.XXX values you need informing the credentials of the services you are using, like google authentication API, MongoDB, Stripe, mailGun, etc.

## PrintScreens

The user log in using google account!

![01](https://user-images.githubusercontent.com/20528688/36084777-af3b9b60-0fa7-11e8-829d-56b717760df8.png)

![02](https://user-images.githubusercontent.com/20528688/36084788-db7cc618-0fa7-11e8-8bf2-3ed7b17de927.png)

The user can buy credits to create more surveys!

![03](https://user-images.githubusercontent.com/20528688/36084821-11e09aea-0fa8-11e8-88ab-7fc21601b913.png)

![04](https://user-images.githubusercontent.com/20528688/36084826-19eb7336-0fa8-11e8-8883-d178098c0b69.png)

Create surveys and confirm them

![06](https://user-images.githubusercontent.com/20528688/36084832-26a24d2a-0fa8-11e8-993e-64776a775a33.png)

![07](https://user-images.githubusercontent.com/20528688/36084834-2901f782-0fa8-11e8-93b3-b8501eaf0dd6.png)

Send the survey for the recipient list. They can answer the survey through e-mail. Collect feedback!

![09](https://user-images.githubusercontent.com/20528688/36084845-3b9b2a94-0fa8-11e8-8326-61bc9532e6a7.png)

![10](https://user-images.githubusercontent.com/20528688/36084846-3d0fd44c-0fa8-11e8-9d82-bc23d0837351.png)

![11](https://user-images.githubusercontent.com/20528688/36084848-3e5c20a8-0fa8-11e8-9cfb-9e73fed4a647.png)

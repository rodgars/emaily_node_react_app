# emaily_node_react_app

Web App developed in the Udemy course "Node with React: Fullstack Web Development"

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

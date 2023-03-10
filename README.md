# Amazon clone using MERN Stack

This is the solution to the task of making Amazon clone using MERN stack


## Overview
---

This is a simplistic clone app of Amazon site using MERN Stack.<br/>  
The project utilizes NodeJs 18.12.1 and MongoDB 6.0.4.<br/>

### Links

[Post new product details](https://amazon-gules-six.vercel.app/ "interface to add products to db")
<br/><br/>
[Frontend Link](https://amazon-client-two.vercel.app "interface for the endproduct")



## Running the project locally
---

### Starting the backend server

```bash
cd Amazon/backend
npm start 
```

### To enter product details in the database for the product api

```bash
cd Amazon/api_client
npm run dev 
```

### The client interface

```bash
cd Amazon/client 
npm run dev
```


## Folder structure
---
 - backend <br/>
    Contains the server side code of the project <br/><br/>
 - api_client <br/>
    Contains the code of the interface for entering product details in the database<br/><br/> 
 - client <br/>
    Contains the code for the front-end part of the project <br/><br/>
    
## Tasks
---

* [x] Develop product schema and model
* [x] Develop controller functions to route specific requrests
* [x] Develop the frontend interface to add products to the database by hitting specified api endpoints
* [ ] Develop the frontend interface for the end user to interact with the application

# Code Challenge - Week 4 (SQL Databases and Server Integration)

In this project, I finally got to link the server with the database.

---

## Overview

Your front-end developer has created all of the client-side code
necessary to view, add, and search for treats from the treats
database. In fact, said developer even styled the entire application!


## Remember
A friendly reminder that this is simply a way for us to see how you are individually doing with the technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit. Just relax and show us what you know!

Thanks and good luck!


## Instructions

1. Fork and clone this repository.
2. Run `npm install` **The package.json file does NOT include all the npm modules you will need.**
2. You will not need to change the client side code (HTML, CSS, nor JavaScript);
3. Design and create the database. Be sure to commit the create table syntax in the `create_database.sql` file.
4. Build out the server routes described below.
5. Once you are complete, check your work into a new repo and post it on GitHub. Submit this link with your assignment.

## Database

Create a `treats` table with the following columns:

* `id` (this will be your primary key)
* `name` (short string)
* `description` (lots of text)
* `pic` (this is a string URL to a supplied image for this treat)

It may be helpful to insert some rows into your new table so your `GET` route is easier to make.

```SQL
INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
```

#### Required Mode

Build out these routes on your server:

* `GET /treats` returns a list of potential treats (e.g. cupcakes, goldfish, etc) and their image URLs.
* `POST /treats` expects a treat type, description, and the path/url for the image. Take a look at the `/server/public/assets` folder for which images we have to work with.

#### Hard Mode

Create a route to handle the search box in the top-right of our page. Recall how we handle these optional parameters...

* `GET /treats/<search terms>` should return only treats that match the query parameter

#### Pro Mode

Still have time? Build out the `Update` and `Delete` features. You will need to change the client side markup and JS.

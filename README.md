This is a project on [Next.js](https://nextjs.org/) and [auth0](https://auth0.com/)

##Start

First, start the development server:

Enter npm run dev in the conosol

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

In order to be a normal user and to see your posts and other people's posts you need to log in with the Login button. Then enter the login and password from pass.txt .

And using the buttons Main and Posts go to the desired pages. Main displays posts that are made under our login. And in the Posts are displayed posts all users, including us.

Then you can check the other users it helps button Logout.

Do not forget to create the file .env.local in which you can write MONGODB_URI = "and your link to the database with the name of the collection" in which will be the parameters "name", "email" "img" and "text". The email parameter must be the same as the user's email.

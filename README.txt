todo:
1. begin building basic front end and hooking with flask backend
2. add user authentication via firebase
3. add user sign in via firebase
4. add flask database for chores, chore streak, users
4. user should be able to access chores/chore streak (connect with flas)

frontend:
the user/admin can sign in and view their chores for the week
the user/admin can sign in and see their chore streak
the user/admin can check if they completed their chore for the day
the admin can sign in and assign chores
the admin can give users admin priveledes


activate python env: .\venv\Scripts\activate
"api": "cd api && venv/bin/flask run --no-debugger"
changes the api directory and runs the flask run command
without having to turn on the venv

front end: npm run dev
back end: npm run api

api requests are forwarded to the backend: http://localhost:5000
credits:
https://blog.miguelgrinberg.com/post/create-a-react-flask-project-in-2025
https://www.freecodecamp.org/news/authenticate-react-app-using-firebase/#heading-step-2-how-to-install-firebase-in-your-project

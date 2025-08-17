todo:
1. begin building basic front end for logging in users

activate python env: .\venv\Scripts\activate
"api": "cd api && venv/bin/flask run --no-debugger"
changes the api directory and runs the flask run command
without having to turn on the venv

front end: npm run dev
back end: npm run api

api requests are forwarded to the backend: http://localhost:5000
credits:
https://blog.miguelgrinberg.com/post/create-a-react-flask-project-in-2025
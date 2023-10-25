# 1. import Flask
from flask import Flask

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route("/")
def index():
    return "Hello, world!"

@app.route("/contact")
def contact():
    email = "test@example.com"
    return f"Shoot your questions to my email here: {email}"


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    name = "Jonathan"
    location = "LA"
    return f"My name is {name}, and I live in {location}."


if __name__ == "__main__":
    app.run(debug=True)

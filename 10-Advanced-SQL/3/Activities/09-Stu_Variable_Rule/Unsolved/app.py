from flask import Flask, jsonify

justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/justice-league")
def justice_league():
    """Return the justice league data as json"""

    return jsonify(justice_league_members)


@app.route("/")
def welcome():
    return (
        f"Welcome to the Justice League API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/justice-league<br/>"
        f"/api/v1.0/justice-league/superhero/batman"
    )

@app.route("/api/v1.0/justice-league/real_name/<real_name>")
def justice_league_character(real_name):
    """Fetch the Justice League character whose real_name matches
       the path variable supplied by the user, or a 404 if not."""

    canonicalized = real_name.replace(" ", "").lower()
    print(f"Canonicalized: {canonicalized}")

    for character in justice_league_members:
        search_term = character["real_name"].replace(" ", "").lower()
        print(f"search_term: {search_term}")

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": f"Character with real_name {real_name} not found."}), 404

"""TODO: Handle API route with variable path to allow getting info
for a specific character based on their 'superhero' name """

@app.route("/api/v1.0/justice-league/superhero/<superhero>")
def justice_league_superhero(superhero):

    canonicalized = superhero.replace(" ", "").lower()
    print(f"Canonicalized: {canonicalized}")

    for character in justice_league_members:
        search_term = character["superhero"].replace(" ", "").lower()
        print(f"search_term: {search_term}")

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": f"Character with real_name {superhero} not found."}), 404


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World from Kate Kulesza! I am adding my first code change.'

@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/about-css')
def about_css():
    return render_template('about-css.html')

@app.route("/greeting")
def greeting():
    return render_template("greeting.html")
@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/favorite-course")
def favorite_course():
    return render_template("favorite-course.html")

@app.route("/contact", methods = ['GET', 'POST'])
def contact():
    if request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        mood = request.form.get('mood')
        awesome = request.form.get('awesome')
        return render_template("contact.html", submitted=True,
                               first_name=first_name, last_name=last_name, email=email,
                               mood=mood, awesome=awesome)
    else :
        return render_template("contact.html", submitted=False)

if __name__ == '__main__':
    app.run()

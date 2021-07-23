from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

if __name__=='__main__':
    app.run(host="172.20.10.4", port="8080")
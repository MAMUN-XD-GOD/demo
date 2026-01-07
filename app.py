from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    # demo delay (simulate analysis)
    time.sleep(2)

    # demo response (fake signal preview)
    result = {
        "market": "Forex",
        "pair": "EURUSD",
        "direction": "BUY",
        "entry": "1.08640",
        "tp": "1.08760",
        "sl": "1.08590",
        "confidence": 78,
        "comment": "Structure + liquidity aligned. Clean market."
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)

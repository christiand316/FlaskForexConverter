from flask import Blueprint, render_template, redirect, request, session
import requests


views = Blueprint('views', __name__)



@views.route('/')
def home():
    ##return "<h1>hello</h1>"
    return render_template("form.html")

@views.route('/convert', methods=['GET' , 'POST'])
def convert():
    amount = float(request.form['amount'])
    base_currency = request.form['base_currency']
    target_currency = request.form['target_currency']

    result = convert_currency(amount, base_currency, target_currency)

    if result is not None:
        converted_amount = f"{amount} {base_currency} = {result} {target_currency}"
        return render_template("output.html", converted_amount=converted_amount)
    else:
        return None

def convert_currency(amount, base_currency, target_currency):
    api_url = f"https://api.exchangerate.host/convert?from={base_currency}&to={target_currency}&amount={amount}"

    try:
        response = requests.get(api_url)
        data = response.json()

        if 'result' in data:
            return data['result']
        else:
            print(f"Conversion failed. Error: {data.get('error', 'Unknown error')}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None

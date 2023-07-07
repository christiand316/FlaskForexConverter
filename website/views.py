from flask import Blueprint, render_template, redirect, request, session
import requests


views = Blueprint('views', __name__)



@views.route('/')
def home():
    return render_template("form.html")

@views.route('/convert', methods=['GET' , 'POST'])
def convert():
    amount = float(request.form['amount'])
    base_currency = request.form['base_currency']
    target_currency = request.form['target_currency']

    result = convert_currency(amount, base_currency, target_currency)

    if result is not None:
        converted_amount = f"{amount} {base_currency} = {currency_symbol(target_currency.upper())}{round(result, 2)} {target_currency.upper()}"
        return render_template("output.html", converted_amount=converted_amount)
    else:
        return None

def currency_symbol(currency_code):
    currency_symbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
        'JPY': '¥',
    }
    return currency_symbols.get(currency_code, '')


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

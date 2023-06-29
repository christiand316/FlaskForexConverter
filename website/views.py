from flask import Blueprint, render_template, redirect, request, session
from surveys import satisfaction_survey


views = Blueprint('views', __name__)



@views.route('/')
def home():
    return render_template("currency_form.html")


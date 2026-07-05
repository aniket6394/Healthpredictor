import joblib
import pandas as pd
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "diabetes_model.pkl"


class DiabetesPredictor:

    def __init__(self):

        self.model = joblib.load(MODEL_PATH)

    def predict(self, data: dict):

        input_df = pd.DataFrame([data])

        prediction = self.model.predict(input_df)[0]

        probability = self.model.predict_proba(input_df)[0][1]

        return prediction, probability
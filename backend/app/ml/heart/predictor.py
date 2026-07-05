import joblib
import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "heart_model.pkl"


class HeartPredictor:

    def __init__(self):
        self.model = joblib.load(MODEL_PATH)

    def predict(self, data: dict):

        df = pd.DataFrame([data])

        prediction = self.model.predict(df)[0]

        probability = self.model.predict_proba(df)[0][1]

        return prediction, probability
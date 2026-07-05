import joblib

model = joblib.load("app/ml/diabetes/diabetes_model.pkl")

print(model.feature_names_in_)
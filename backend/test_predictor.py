from app.ml.diabetes.predictor import DiabetesPredictor

predictor = DiabetesPredictor()

sample = {

    "Pregnancies":2,

    "Glucose":145,

    "BloodPressure":80,

    "SkinThickness":20,

    "Insulin":150,

    "BMI":32,

    "DiabetesPedigreeFunction": 0.45,

    "Age":40

}

prediction, probability = predictor.predict(sample)

print(prediction)

print(probability)
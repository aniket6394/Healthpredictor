from fastapi import APIRouter, Depends

from app.schemas.prediction import (
    DiabetesPredictionRequest,
    DiabetesPredictionResponse
)

from app.ml.diabetes.predictor import DiabetesPredictor

from app.auth.dependencies import get_current_user
from app.models.user import User

from sqlalchemy.orm import Session

from app.auth.dependencies import get_db

from app.services.prediction_service import PredictionService

router = APIRouter(
    prefix="/predict",
    tags=["Diabetes Prediction"]
)

predictor = DiabetesPredictor()


@router.post(
    "/diabetes",
    response_model=DiabetesPredictionResponse
)
def predict_diabetes(
    request: DiabetesPredictionRequest,
    current_user: User = Depends(get_current_user),
db: Session = Depends(get_db)
):

    prediction, probability = predictor.predict(
        request.model_dump()
    )

    if prediction == 1:

        risk = "High"

        recommendation = (
            "Consult a healthcare professional. "
            "Maintain a healthy diet, exercise regularly, "
            "monitor blood glucose, and avoid excessive sugar intake."
        )

    else:

        risk = "Low"

        recommendation = (
            "Continue a healthy lifestyle with regular exercise, "
            "balanced nutrition, and routine medical check-ups."
        )
        PredictionService.save_prediction(
    db=db,
    user_id=current_user.id,
    disease="Diabetes",
    prediction="Positive" if prediction == 1 else "Negative",
    probability=float(probability),
    recommendation=recommendation,
    input_data=request.model_dump()
)

    return {

        "prediction": prediction,

        "probability": round(float(probability), 4),

        "risk_level": risk,

        "recommendation": recommendation

    }
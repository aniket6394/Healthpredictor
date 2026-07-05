from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.heart_prediction import (
    HeartPredictionRequest,
    HeartPredictionResponse
)

from app.ml.heart.predictor import HeartPredictor

from app.auth.dependencies import get_current_user, get_db
from app.models.user import User
from app.services.prediction_service import PredictionService

router = APIRouter(
    prefix="/predict",
    tags=["Heart Prediction"]
)

predictor = HeartPredictor()


@router.post(
    "/heart",
    response_model=HeartPredictionResponse
)
def predict_heart(
    request: HeartPredictionRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    prediction, probability = predictor.predict(
        request.model_dump()
    )

    if prediction == 1:
        risk = "High"
        recommendation = (
            "Consult a cardiologist, exercise regularly, "
            "maintain a healthy diet, and control blood pressure and cholesterol."
        )
    else:
        risk = "Low"
        recommendation = (
            "Continue a healthy lifestyle with regular exercise and routine check-ups."
        )

    PredictionService.save_prediction(
        db=db,
        user_id=current_user.id,
        disease="Heart Disease",
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
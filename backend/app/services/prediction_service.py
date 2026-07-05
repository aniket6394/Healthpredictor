from sqlalchemy.orm import Session

from app.models.prediction import Prediction


class PredictionService:

    @staticmethod
    def save_prediction(
    db: Session,
    user_id: int,
    disease: str,
    prediction: str,
    probability: float,
    recommendation: str,
    input_data: dict
    ):

        prediction_record = Prediction(

    user_id=user_id,

    disease=disease,

    prediction=prediction,

    probability=probability,

    recommendation=recommendation,

    input_data=input_data

)

        db.add(prediction_record)

        db.commit()

        db.refresh(prediction_record)

        return prediction_record

    @staticmethod
    def get_user_history(
        db: Session,
        user_id: int
    ):

        return (

            db.query(Prediction)

            .filter(Prediction.user_id == user_id)

            .order_by(Prediction.created_at.desc())

            .all()

        )
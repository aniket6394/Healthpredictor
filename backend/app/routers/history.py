from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.auth.dependencies import get_db, get_current_user
from app.models.user import User
from app.services.prediction_service import PredictionService
from app.schemas.history import PredictionHistoryResponse

router = APIRouter(
    prefix="/history",
    tags=["Prediction History"]
)


@router.get(
    "/",
    response_model=list[PredictionHistoryResponse]
)
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    return PredictionService.get_user_history(
        db,
        current_user.id
    )
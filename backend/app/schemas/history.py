from datetime import datetime
from pydantic import BaseModel


class PredictionHistoryResponse(BaseModel):

    id: int

    disease: str

    prediction: str

    probability: float

    recommendation: str

    created_at: datetime

    class Config:
        from_attributes = True
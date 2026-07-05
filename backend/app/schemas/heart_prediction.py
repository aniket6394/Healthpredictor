from pydantic import BaseModel, Field


class HeartPredictionRequest(BaseModel):

    age: int = Field(..., ge=0)

    sex: int

    cp: int

    trestbps: float

    chol: float

    fbs: int

    restecg: int

    thalach: float

    exang: int

    oldpeak: float

    slope: int

    ca: int

    thal: int


class HeartPredictionResponse(BaseModel):

    prediction: int

    probability: float

    risk_level: str

    recommendation: str
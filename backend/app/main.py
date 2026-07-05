from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.auth import router as auth_router
from app.database import Base, engine

from app.models.user import User
from app.models.prediction import Prediction
from app.routers.diabetes import router as diabetes_router
from app.routers.history import router as history_router
from app.routers.heart import router as heart_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Health Predictor API",
    version="1.0.0",
)

app.include_router(auth_router)
app.include_router(diabetes_router)
app.include_router(heart_router)
app.include_router(history_router)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "AI Health Predictor API is running"}

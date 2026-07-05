from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database import Base


class Prediction(Base):

    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    disease = Column(
        String,
        nullable=False
    )

    prediction = Column(
        String,
        nullable=False
    )

    probability = Column(
        Float,
        nullable=False
    )

    recommendation = Column(
        String,
        nullable=False
    )
    input_data = Column(
    JSON,
    nullable=False
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    user = relationship(
        "User",
        back_populates="predictions"
    )
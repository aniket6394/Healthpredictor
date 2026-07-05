from app.services.auth_service import AuthService
from app.database import SessionLocal

db = SessionLocal()

user = AuthService.get_user_by_email(
    db,
    "abc@gmail.com"
)

print(user)

db.close()
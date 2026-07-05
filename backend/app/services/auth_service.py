from sqlalchemy.orm import Session

from app.models.user import User

from app.auth.security import (
    hash_password,
    verify_password
)

from app.auth.jwt import create_access_token


class AuthService:

    @staticmethod
    def get_user_by_email(db: Session, email: str):
        """
        Returns the user if the email exists,
        otherwise returns None.
        """
        return db.query(User).filter(User.email == email).first()

    @staticmethod
    def create_user(
        db: Session,
        full_name: str,
        email: str,
        password: str
    ):
        """
        Creates a new user after hashing the password.
        """

        hashed_password = hash_password(password)

        user = User(
            full_name=full_name,
            email=email,
            password=hashed_password,
            role="user"
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        return user

    @staticmethod
    def authenticate_user(
        db: Session,
        email: str,
        password: str
    ):
        """
        Verifies email and password.
        Returns the user if valid.
        Returns None otherwise.
        """

        user = AuthService.get_user_by_email(
            db,
            email
        )

        if not user:
            return None

        if not verify_password(
            password,
            user.password
        ):
            return None

        return user

    @staticmethod
    def login(
        db: Session,
        email: str,
        password: str
    ):
        """
        Authenticates the user and
        generates a JWT token.
        """

        user = AuthService.authenticate_user(
            db,
            email,
            password
        )

        if not user:
            return None

        access_token = create_access_token(
            {
                "sub": user.email,
                "role": user.role
            }
        )

        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user": user
        }
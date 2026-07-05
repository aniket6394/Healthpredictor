from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from fastapi.security import OAuth2PasswordRequestForm

from app.database import SessionLocal
from app.schemas.user import UserRegister, UserResponse
from app.services.auth_service import AuthService
from fastapi import HTTPException, status
from app.auth.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# Database Dependency
def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED
)
def register_user(
    user: UserRegister,
    db: Session = Depends(get_db)
):
    """
    Register a new user.
    """

    existing_user = AuthService.get_user_by_email(
        db,
        user.email
    )

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already registered."
        )

    new_user = AuthService.create_user(
        db=db,
        full_name=user.full_name,
        email=user.email,
        password=user.password
    )

    return new_user


@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """
    Login user and return JWT token.
    """

    token = AuthService.login(
        db=db,
        email=form_data.username,
        password=form_data.password
    )

    if token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )

    return token



@router.get(
    "/me",
    response_model=UserResponse
)
def get_logged_in_user(

    current_user: User = Depends(
        get_current_user
    )

):

    return current_user

@router.get("/protected")
def protected_route(

    current_user: User = Depends(
        get_current_user
    )

):

    return {

        "message":"Welcome!",

        "user":current_user.email
    }

@router.get("/admin")
def admin_dashboard(

    current_user: User = Depends(
        get_current_user
    )

):

    if current_user.role != "admin":

        raise HTTPException(

            status_code=403,

            detail="Access denied."

        )

    return {

        "message":"Welcome Admin"
    }
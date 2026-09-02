from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from lowcode_api.core.database import get_db
from lowcode_api.schemas.user import UserCreate, UserResponse
from lowcode_api.services.user_service import UserService

router = APIRouter(
  prefix = "/api/users",
  tags = ["users"]
)

user_service = UserService()

@router.post("/", response_model=UserResponse)
def create_user(data:UserCreate,db:Session = Depends(get_db)):

  return user_service.create_user(db,data)


@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id:str,db:Session = Depends(get_db)):

  return user_service.get_user(db,user_id)


@router.get("/", response_model=list[UserResponse])
def get_users(db:Session = Depends(get_db)):

  return user_service.get_users(db)


import uuid

from lowcode_api.models.user import User
from lowcode_api.schemas.user import UserCreate

from sqlalchemy import select
from sqlalchemy.orm import Session

class UserService:

  def create_user(self,db: Session,data:UserCreate)->User:

    user = User(
      id = str(uuid.uuid4().hex),
      name = data.name,
      email = data.email
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user

  def get_user(self,db:Session,user_id:str)->User:

    return db.get(User,user_id)


  def get_users(self,db:Session) -> list[User]:

    statement = select(User)

    return list(db.scalars(statement).all())

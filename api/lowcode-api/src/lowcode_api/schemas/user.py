
from datetime import datetime
from pydantic import BaseModel

class UserCreate(BaseModel):
  name:str
  email:str


class UserResponse(BaseModel):
  id:str
  name:str
  email:str
  create_at:datetime

  model_config={
    "from_attributes": True
  }
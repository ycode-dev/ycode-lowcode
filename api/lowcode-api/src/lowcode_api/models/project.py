from pydantic import BaseModel

class Project(BaseModel):
  id: str
  title:str
  description:str
  version:str
  type:str
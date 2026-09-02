from pydantic_settings import BaseSettings

class SqlSettings(BaseSettings):
  database_url:str = "sqlite:///./whycode.db"



settings = SqlSettings()
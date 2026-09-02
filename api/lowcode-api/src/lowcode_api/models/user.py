from datetime import datetime
from sqlalchemy import DateTime,String
from sqlalchemy.orm import Mapped, mapped_column

from lowcode_api.core.database import Base

class User(Base):
  __tablename__ = "users"

  id:Mapped[str] = mapped_column(
    primary_key = True
  )

  name:Mapped[str] = mapped_column(
    String(100),
    nullable = False
  )

  email:Mapped[str] = mapped_column(
    String(255),
    unique = True,
    nullable = False,
    index = True
  )

  create_at:Mapped[datetime] = mapped_column(
    DateTime,
    default = datetime.utcnow,
    nullable = False
  )
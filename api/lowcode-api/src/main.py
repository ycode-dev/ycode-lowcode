from fastapi import FastAPI

from lowcode_api.api.routers.user import router as user_router

app = FastAPI()

app.include_router(user_router);
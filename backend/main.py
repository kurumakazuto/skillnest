from fastapi import FastAPI
from routers import refine

app = FastAPI()

app.include_router(refine.router)
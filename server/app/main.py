from fastapi import FastAPI
from .routes import model
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
   "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(model.route, prefix='/model')

@app.get("/")
async def root():
    return {"message": "Hello World"}

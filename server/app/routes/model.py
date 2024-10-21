from fastapi import APIRouter, Request
import pickle

route = APIRouter()

@route.get("/")
async def root():
    return {"message": "Hello World"}

@route.post("/predict")
async def predict(data: dict):
    regression_model = pickle.load(open("app/pickels/ridge.pkl", "rb"))
    scaler = pickle.load(open("app/pickels/scaler.pkl", "rb"))
    
    input_data = [data['data']]
    print(type(input_data))
    # scaler = StandardScaler()
    scaled_data = scaler.transform(input_data)
    result = regression_model.predict(scaled_data)
    
    return {"message": result[0]}

from typing import Optional, List
from fastapi import FastAPI
from pydantic import BaseModel, Field

# これを作る
# {
#   "shopInfo": {
#     "name": "naiki",
#     "location": "Tokyo"
#   },
#   "items": [
#     {
#       "name": "T-shirt",
#       "description": "yasuiyo",
#       "price": 50000,
#       "tax": 1.8
#     }...
#   ]
# }

# ptyhonの型定義はclassで行う（Javaと同じ感じかな）
class ShopInfo(BaseModel):
  name: str
  location: str

class Item(BaseModel): 
  name: str = Field(min_length=4, max_length=12)
  description: Optional[str] = None
  price: int
  tax: Optional[float] = None

class Data(BaseModel):
  shopInfo: Optional[ShopInfo] = None
  items: List[Item]

app = FastAPI()

@app.post("/")
async def index(data: Data):
  return {"data": data} 
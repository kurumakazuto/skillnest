import requests
import json

def main():
  url = 'http://127.0.0.1:8000/item/' 
  body = {
      "name": "string",
      "description": "string",
      "price": 0,
      "tax": 0
    }
  res = requests.post(url, json.dumps(body)) # 必ずjsonにすること
  print(res.json())

if __name__ == "__main__":
  main()

# 実際に使うとしたら、bodyはフロントで設定して渡す
def create_item(body):
    url = "http://127.0.0.1:8000/item/"
    return requests.post(url, json.dumps(body))
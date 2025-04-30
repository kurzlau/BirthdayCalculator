from fastapi import FastAPI
import uvicorn
from api.birthday.router import bdayrouter

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)

app.include_router(bdayrouter, tags=["birthday"])
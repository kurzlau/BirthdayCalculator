from datetime import date
from fastapi import APIRouter, Query
from lib.birthday import BirthdayService
from fastapi.responses import JSONResponse

bdayrouter = APIRouter()
birthdayservice = BirthdayService()

@bdayrouter.get("/bday", status_code=200)
async def calculate_bday(bday:date = Query(...,description="Your birthday in yyyy-mm-dd format",example="2002-11-07")):
    result = await birthdayservice.get_birthday_details(bday)
    return JSONResponse(content=result)


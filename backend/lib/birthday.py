from datetime import date
from dateutil.relativedelta import relativedelta


class BirthdayService:
    def __init__(self):
        self.zodiacs:list = [(120, 'Capricorn'), (218, 'Aquarius'), (320, 'Pisces'), (420, 'Aries'), (521, 'Taurus'),
           (621, 'Gemini'), (722, 'Cancer'), (823, 'Leo'), (923, 'Virgo'), (1023, 'Libra'),
           (1122, 'Scorpio'), (1222, 'Sagittarius'), (1231, 'Capricorn')]

    async def calculate_age(self, birthday:date, today:date):
        return today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))
    
    async def calculate_age_in_days(self, birthday:date, today:date):
        delta = (today - birthday).days
        return delta
    
    async def calculate_age_in_days_since_last_bday(self, birthday:date, today:date):
        last_birthday = date(today.year, birthday.month, birthday.day)
        if last_birthday > today:
            last_birthday = date(today.year-1, birthday.month, birthday.day)

        days_since_last_birthday = (today - last_birthday).days

        return days_since_last_birthday
    
    async def calculate_age_in_days_until_next_bday(self, birthday:date, today:date):
        next_birthday = date(today.year, birthday.month, birthday.day)
        if next_birthday < today:
            next_birthday = date(today.year+1, birthday.month, birthday.day)

        days_until_next_birthday = (next_birthday - today).days

        return  days_until_next_birthday

    
    async def calculate_age_in_months(self, birthday:date, today:date):
        delta = relativedelta(today, birthday)
        age_in_months = delta.years*12 + delta.months
        return age_in_months

       
    async def get_zodiac_of_date(self, birthday:date, today:date):
        # Stolen from stackoverflow 
        # https://stackoverflow.com/questions/3274597/how-would-i-determine-zodiac-astrological-star-sign-from-a-birthday-in-python
       
        date_number = int("".join((str(birthday.month), '%02d' % birthday.day)))
        for z in self.zodiacs:
            if date_number <= z[0]:
                return z[1]
    
    
    async def get_birthday_details(self,bday:date):
        today = date.today()
        age_in_years = await self.calculate_age(bday, today)
        age_in_days = await self.calculate_age_in_days(bday, today)
        age_in_months = await self.calculate_age_in_months(bday, today)
        days_since_last_birthday = await self.calculate_age_in_days_since_last_bday(bday, today)
        days_until_next_birthday = await self.calculate_age_in_days_until_next_bday(bday, today)
        get_zodiac = await self.get_zodiac_of_date(bday, today)

    
        return {
            "age_in_years" : age_in_years,
            "age_in_months": age_in_months,
            "age_in_days": age_in_days,
            "days_since_last_birthday": days_since_last_birthday,
            "days_until_next_birthday": days_until_next_birthday,
            "zodiac": get_zodiac
        }


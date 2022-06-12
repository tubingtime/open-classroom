import re,csv,os,json
from xmlrpc.client import DateTime
import pandas as pd
from typing import NamedTuple
from datetime import datetime


# lines = open('classes.html', 'r').readlines()

# headers = [ #headers excluding CRN and Select
#     [0,"Course Link"],
#     [0,"Subj"],
#     [0,"Crse"],
#     [0,"Sec"],
#     [0,"Cmp"],
#     [0,"Cred"],
#     [1,"Title"],
#     [1,"Days"],
#     [1,"Time"],
#     [0,"Cap"],
#     [1,"Act"],
#     [0,"Rem"],
#     [0,"WL Cap"],
#     [0,"WL Act"],
#     [0,"WL Rem"],
#     [0,"XL Cap"],
#     [0,"XL Act"],
#     [0,"XL Rem"],
#     [0,"Instructor"],
#     [1,"Date (MM/DD)"],
#     [1,"Location"],
#     [0,"Attribute"]
# ]

#data scraper
# classList = [["CRN","Title","Days","Time","Students","Date","Location"]]; #we are going to append data in this order to this list
# for index, line in enumerate(lines): #have to use enumerate so i can manipulate the index
#     if "crn_in=" in line:
#         crn = re.findall(r"(crn_in=)(\d{5})",line) #regex, see: https://regex101.com/r/fogE3w/1
#         if crn != []:
#             entry = []
#             entry.append(crn[0][1]);
#             while "dddefault" not in lines[index]: #advance to next section of data  (possibly not needed)
#                 index+=1; #(manipulating index)
#             for header in headers:
#                 if header[0] == 1:
#                     value = re.findall(r"(dddefault\">)(.*)(<)",lines[index])
#                     entry.append(value[0][1])
#                 index+=1; 
            
#             classList.append(entry);
            


##  write as csv
# with open('classData.csv', 'w', newline='') as file:
#     writer = csv.writer(file, quoting=csv.QUOTE_ALL)
#     writer.writerows(classList)
#print("CSV file generated in: %s" % os.getcwd());

## generate db
class classroom(NamedTuple):
    name: str
    info: str
    bookings: list
class booking(NamedTuple):
    days: list
    start: datetime.time
    end: datetime.time
    crn: int
    name: str
db = {
    "TST69": classroom("LS21","blaze room",[["nugget"]]) #test entry
}
data = pd.read_csv("data/classData.csv")
for index, row in data.iterrows():
    if ("TBA" in row.Location or "TBA" in row.Time or "RMT" in row.Location or "TBA" in row.Date):
        continue
    #else:
    timeOccupied = re.findall(r"(..:.. ..)-(..:.. ..)",row.Time) #regex, see: https://regex101.com/r/M1O1ON/3
    format = "%I:%M %p" #https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes
    start = datetime.strptime(timeOccupied[0][0],format).time()
    end = datetime.strptime(timeOccupied[0][1],format).time()
    newBooking = booking(list(row.Days),start,end,row.CRN,row.Title)
    if row.Location not in db:
        newClassroom = classroom(row.Location,"no info",[newBooking])
        db.update({row.Location: newClassroom})
    else:
        currentRoom = db.get(row.Location)
        currentRoom.bookings.append(newBooking)

def myDefault(obj):
    """Default JSON serializer."""
    import calendar, datetime

    if isinstance(obj, datetime.time):
        return str(obj)
    raise TypeError('Not sure how to serialize %s' % (obj,))


with open("db.json", "w") as outfile:
    json.dump(db, outfile, default=myDefault)
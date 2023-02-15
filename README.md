# open-classroom
App to find open classroomes to study in at USF

Site is live at: https://usfballmap.teejay.pw/


## To add new data
You need a CSV file containing class information in the format of data/classData.csv

To generate this file I logged into banner, went to Registration->Look Up and Register for Classes->Enter Term. Then click 'All' for Subject and search.
This will show you a page with all class info. Save this page as classes.html and put in the `data` folder. 

Then from the base dir: Run `python3 data-wrangler.py` and `python3 data-wrangler2.py`.

NOTE: This was tested using ` Release: 8.7.1.2 `

#just a test file for regex

import re

regex = r"(value=\")(\d{5})"

test_str = ("<tr>'   <input type=\"checkbox\" name=\"sel_crn\" value=\"40005 202240\" id=\"action_id1\">\\n'\n")

regex2 = r"(value=\")(\d{5})"

csv = (""" "40002","Academic Oral Comm II","TR","04:35 pm-06:20 pm","1","08/23-12/15","ED 110" """)



matches = re.findall(regex, test_str)
print(matches[0][1])


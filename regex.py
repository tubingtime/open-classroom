# coding=utf8
# the above tag defines encoding for this document and is for Python 2.x compatibility

import re

regex = r"(value=\")(\d{5})"

test_str = ("<tr>'   <input type=\"checkbox\" name=\"sel_crn\" value=\"40005 202240\" id=\"action_id1\">\\n'\n")

matches = re.findall(regex, test_str)
print(matches[0][1])


# coding=utf8
# the above tag defines encoding for this document and is for Python 2.x compatibility

import re

regex = r"(..):(..) (..)-(..):(..) (..)"

test_str = "10:30 am-11:35 am"

matches = re.findall(regex, test_str, re.MULTILINE)


print(matches)
print(matches[0])
print(matches[0][0])
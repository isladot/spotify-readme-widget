import sys
import requests
from base64 import b64encode

response = requests.get(sys.argv[1])
print(b64encode(response.content).decode("ascii"))

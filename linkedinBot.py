from cred import *

from linkedin import linkedin


RETURN_URL = "http://localhost:8000";
authentication = linkedin.LinkedInAuthentication(clientID, clientSecret, RETURN_URL, linkedin.PERMISSIONS.enums.values())
print (authentication.authorization_url)
application = linkedin.LinkedInApplication(authentication)


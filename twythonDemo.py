from keys import *
from twython import Twython

twitter = Twython(app_key,app_secret,oauth_token,oauth_token_secret)

results = twitter.search(q="#vanguardhackathon2017", count=3)
all_tweets = results['statuses']

for tweet in all_tweets:
	userName = tweet['user']['screen_name']
	id = str(tweet['id'])


statushead = "@" + userName + " "
twitter.update_status(status=statushead+"Take our retirement quiz to find out how you can save! goo.gl/jCT21d", in_reply_to_status_id=id)
# https://orange-robe-tours.netlify.com
NETLIFY_AUTH = 637cf4eda5632aa45d4eeae68ae7dfb6d9edb4285b87cee0ca133c6e36b6dbc3

deploy:
	NETLIFY_AUTH_TOKEN=${NETLIFY_AUTH} \
	npx netlify deploy

ship:
	NETLIFY_AUTH_TOKEN=${NETLIFY_AUTH} \
	npx netlify deploy --prod
# The default target must be at the top
.DEFAULT_GOAL := start

start:
	npm start

install:
	npm install

update-deps:
	ncu -u
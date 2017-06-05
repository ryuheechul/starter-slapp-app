.PHONY: run ngrok down
run:
	docker-compose up
ngrok:
	docker-compose -f docker-compose.yml -f docker-compose.ngrok.yml up
down:
	docker-compose -f docker-compose.yml -f docker-compose.ngrok.yml down


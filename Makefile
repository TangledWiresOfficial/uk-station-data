.PHONY: build
build:
	npm run tsc

.PHONY: clean
clean:
	-rm -r dist/

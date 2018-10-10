# Citizen's Guide

To get started:
```
docker build -t cg .   
docker run -v $(pwd)/fresh/:/cg-docker/public cg npm run-script build
```
(If Windows, try `%cd%` instead of `$(pwd)`)
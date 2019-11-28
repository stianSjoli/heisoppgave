FROM node:latest as buildFrontend
COPY . /src
RUN cd src && npm run build

FROM golang:alpine AS buildBackend
RUN apk --no-cache add build-base git bzr mercurial gcc
RUN go get github.com/gin-gonic/gin
RUN go get github.com/gin-contrib/static
COPY server.go /src/server.go
RUN cd /src && go build -o goapp

# final stage
FROM alpine
WORKDIR /app
COPY --from=buildBackend /src/goapp /app/
COPY --from=buildFrontend /src/build /app/build/
ENTRYPOINT ./goapp




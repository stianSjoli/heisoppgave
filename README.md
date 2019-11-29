
## Hvordan kjøre oppgaven 

Fordi at det er en mltistage build så kreves Docker 17.05 eller høyere for deamon og klient. 

- klon repositoriet (git pull)
- gå inn i prosjektroot (cd "prosjektnavn")
- Bygg prosjektet (docker build . -t "navn på image")
- kjør prosjektet (docker run -p 8081:8081 "navn på image")

## Alternativt 

- docker pull stiansj/heisoppgave (fra dockerhub)

- docker run -p 8081:8081 stiansj/heisoppgave
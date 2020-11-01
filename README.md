/*Aplikacija vsebuje Google zemljevid pridobljen s pomočjo Google ApiKey, zemljevid ima 
samo dopolnjevnaje besedila, ustrezno mesto pa izberemo z klikom na eno izmed teh izbir. Mesto, država itd. se ob iskanju
ločujejo z vejico. Na zemljevidu je tudi marker iskanega mesta, ki ima tudi funkcijo pomikanja(drag). Ob zagonu pa nam 
samodejno prikaže našo trenunto lokacijo.
Pod zemljevidom je prikaz vremena za današnji dan z nekaj podatki(tempratura, vlažnost, pritisk, ikona... 
 Z več dnevno napovedjo sem imel nekaj težav tako , da mi to ni uspelo. 
 Pri shranjevanju zgodovine sem se zanesel na rešitev lokalnega strežnika. Navodila za zagon so spodaj. 
 Do zgodovine iskanj dostopamo v navigaciji zgoraj*/
 



//Zagon lastnega serverja za shranjevnaje lokacij v file db.json
//1.--> npm install -g json-server
//2.--> npx json-server --watch db.json --port 3333
# UniversityInternship

![totalDayHours.md](totalDayHours.md)

## Day 01 [02/05/18] : 5,5 ore
* Spiegazione architettura software
* Individato un percorso indicativo da seguire: AngularJS, Spring, ChatBot
* Inizio studio di AngularJS sul libro: AngularJS Up & Running Book for O'Reilly (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))
* Arrivato fino al capitolo 2 del libro (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))

## Day 02 [03/05/18] : 6,5 ore
* Continuato lo studio di AngularJS fino al capitolo 3 (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))
* Varie prove di unit test usando Jasmine per l'implementazione dei test e Karma per il running

## Day 03 [08/05/18] : 6,5 ore
* Continuato lo studio di AngularJS fino a capitolo 4 (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))
* Studio del vecchio progetto chatBot su macchina remota
* Vari test su dialogflow per la generazione di file di configurazione JSON dell'intelligenza artificiale
* Analisi di un chatbot base (vedi repository: [girliemac/web-speech-ai](https://github.com/girliemac/web-speech-ai))

## Day 04 [09/05/18] : 7 ore
* Creazione di un chatbot locale (vedi repository: [BVChatBot](https://github.com/Wabri/BVChatBot)) 
* Creazione di un prototipo di inteligenza artificiale per pagamenti usando [dialogflow](https://dialogflow.com)
* Tentativo di comprensione del vecchio prototipo (risultato: riesce solo a eseguire un singolo test e a generare un json con le diverse valute europee)

## Day 05 [10/05/18] : 4 ore
* Continuato la stesura del codice del chatbot (vedi repository: [BVChatBot](https://github.com/Wabri/BVChatBot))
* Studio degli strumenti usati nella chat: [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), [Socket.io](https://socket.io/) , [API.AI](https://github.com/dialogflow/dialogflow-nodejs-client-v2)

## Day 06 [16/05/18] : 7,5 ore
* Continuato lo studio di AngularJS fino al capitolo 6 (vedi: [AngularJSRepo](https://github.com/Wabri/angularJS-Up-And-Running)) 
* Continuato lo studio degli strumenti usati nella chat: [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), [Socket.io](https://socket.io/) , [API.AI](https://github.com/dialogflow/dialogflow-nodejs-client-v2)

## Day 07 [17/05/18] : 5,5 ore
* Integrazione di una chat testuale al chatbot (vedi repository: [BVChatBot](https://github.com/Wabri/BVChatBot))

## Day 08 [22/05/18] : 6,5 ore
* Studio della documentazione dello strumento open source [rasa](https://rasa.com/) che permette di usare strumenti di machine learning. Dovrebbe sostituire dialogflow permettendo di trattenere dati sensibili all'interno del server dedicato al software sviluppato evitando l'intermediario google.
* Creazione di alcuni esempi per l'utilizzo di [rasa](https://rasa.com/) (vedi repository: [LearningRasaNLU](https://github.com/Wabri/LearningRasa/))
* Installazione componenti necessari per sviluppo [rasa](https://rasa.com/) su sistema operativo windows: python, pip, [spacy](https://spacy.io/), rasa_nlu, rasa_core

## Day 09 [23/05/18] : 6,5 ore
* Studio di Rasa NLU nei docs della pagina ufficiale [rasa](https://rasa.com/)
* Studio dell'architettura MVC con servizi Rest e [spring boot](https://spring.io/guides)
* Studio di un esempio spring e vari test usando swagger (vedi directory:  [exampleSpringRest](exampleSpringRest/BV-SERVICES-TEST))

## Day 10 [24/05/18] : 6,5 ore
* Ricerca di un esempio di chat [exampleJavascriptFrontend](exampleJavascriptFrontend/front)
* Tentativi di esecuzione di una comunicazione locale tra back-end [exampleSpringRest](exampleSpringRest/BV-SERVICES-TEST) e front-end [exampleJavascriptFrontend](exampleJavascriptFrontend/front)
* Problemi con la comunicazione spring boot e grunt, la richiesta inviata tramite front-end non veniva accettata dal back-end in localhost quindi è stato necessario inserire una configurazione globale che potesse consentire lo scambio di dati, vedi [configurazione qui](https://github.com/Wabri/UniversityInternship/blob/9f6834eef8cebb01c19f8a1ecb02c40055c31d40/exampleSpringRest/BV-SERVICES-TEST/src/main/java/ch/bestvision/serv/config/WebConfig.java#L11)

## Day 11 [29/05/18] : 5,5 ore
* Revisione del codice [exampleJavascriptFrontend](exampleJavascriptFrontend/front) per integrare il codice della chat precedentemente creata [BVChatBot](https://github.com/Wabri/BVChatBot)
* Il codice [exampleJavascriptFrontend](exampleJavascriptFrontend/front) ha dato problemi quindi mi sono concentrato sulla modifica del [BVChatBot](https://github.com/Wabri/BVChatBot) per fare in modo che esegua una chiamata rest generica per una comunicazione base con [exampleSpringRest](exampleSpringRest/BV-SERVICES-TEST)

## Day 12 [30/05/18] : 6 ore
* Continuato la stesura e l'aggiornamento del [BVChatBot](https://github.com/Wabri/BVChatBot)
* Ho completato il cerchio di comunicazione tra il chatbot, dialogflow e backend (ancora nella fase base [exampleSpringRest](exampleSpringRest/BV-SERVICES-TEST))

## Day 13 [31/05/18] : 6 ore (forse)
* Risolto un bug nel codice [BVChatBot](https://github.com/Wabri/BVChatBot) e successivo miglioramento del codice, il risultato attualmente è: ![Chatbot](resources/prototype.PNG)
* Pubblicato il bot su [heroku](https://www.heroku.com/) all'indirizzo: [https://trainingchatbotbv.herokuapp.com/](https://trainingchatbotbv.herokuapp.com/). in questo modo posso fare training su più dispositivi (per ora funziona solo su chrome)
* Studiato un modo per utilizzare [rasa_nlu](https://nlu.rasa.com/) per processare i messaggi del bot (vedi repository: [LearningRasaNLU](https://github.com/Wabri/LearningRasa))
* Creato un esempio di modello di training per l'intelligenza artificiale della chat, creato un server locale e eseguita una semplice chiamata ![rasaCall](resources/rasaCall.PNG)

## Day 14 [12/06/18] : 7,5 ore
* Vari tentativi di connessione di [rasa_nlu](https://nlu.rasa.com/) con emulazione configurazione Dialogflow.
* Nella repository [LearningRasaNLU](https://github.com/Wabri/LearningRasa) sono riuscito a creare un modello a partire da file di configurazione di [dialogflow](https://dialogflow.com), all'interno di quella repository ho scritto anche degli appunti riassuntivi del processo di emulazione rasa dialogflow

## Day 15 [13/06/18] : 6,5 ore
* Ripreso il lavoro di ieri, usando i dati di training fatto con dialogflow in precedenza ho completato il modello e finito i [primi appunti sull'uso di rasa](https://github.com/Wabri/LearningRasa/blob/master/README.md)
* Ho testato il funzionamento del backend rasa con formattazione dialogflow con un semplice testo "paga nomeCasuale 100 euro":

![jsonDialogflowFormatWithRasaServer.png](resources/jsonDialogflowFormatWithRasaServer.png)

* Ho poi confrontato con backend rasa con formattazione rasa con il solito testo:

![jsonRasaFormatGetFromRasa.png](resources/jsonRasaFormatGetFromRasa.png)

* Per curiosità ho eseguito una valutazione del prototipo del modello che sto usando e nonostante i pochi dati la matrice "intent confusion matrix" ha prodotto questo risultato:

![intentConfusionMatrix.png](resources/intentConfusionMatrix.png)


## Day 16 [14/06/18] : 3,5 ore
* Ho modificato il codice del frontend [BVChatBot](https://github.com/Wabri/BVChatBot) per fare in modo che invii richieste a entrambi i backend.
* In locale ho eseguito i 2 server creati: rasa_nlu sulla porta 5000 e spring sulla porta 8080; lanciando il frontend sulla porta 9001  ho eseguito 2 richieste: una a rasa e una a spring, entrambe con risultato positivo.
```
>node index.js
Express server listening on port 9001 in development mode
**** Processing: salve ****
**** Bot response: Buongiorno! ****
**** Bot response: Buongiorno! ****
{ id: 12,
  data: 'b31ad6a1-798f-41de-8859-9efde359478d',
  description: 'Description random 6eb05513-b27c-4d21-8691-3b14934450a3' }
{ intent:
   { name: 'Default Welcome Intent',
     confidence: 0.5236232713335918 },
  entities: [],
  intent_ranking:
   [ { name: 'Default Welcome Intent',
       confidence: 0.5236232713335918 },
     { name: 'payRequest - yes', confidence: 0.3068254747049495 },
     { name: 'payRequest', confidence: 0.1420009627442583 },
     { name: 'payRequest - no', confidence: 0.027550291217200124 } ],
  text: 'ciao',
  project: 'default',
  model: 'model_20180613-095225' }
 ```
(il bot risponde 2 volte perchè il socket emette un segnale per entrambe le richieste)

(per un errore ho lasciato anche la richiesta diretta a dialogflow tramite api.ai. Casualmente questo mi ha portato a notare che rasa migliora la qualità di riconoscimento degli intenti e delle entità rispetto a dialogflow, con lo stesso set di dati, infatti non è riuscito ad eseguire un parser della frase con la stessa precisione di rasa)

* Sotto consiglio del tutor universitario ho deciso di imparare il [TypeScript](https://www.typescriptlang.org/index.html) per sostituirlo al JavaScript (vedi repopsitory: [LearningTypeScript](https://github.com/Wabri/LearningTypescript))

## Day 17 [19/06/18] : 4,5 ore
* Continuato a studiare [TypeScript](https://www.typescriptlang.org/index.html) seguendo la guida di [html.it](http://www.html.it/guide/guida-typescript/) e aggiornata la repository [LearningTypescript](https://github.com/Wabri/LearningTypescript)
* Comprensione della struttura interna effettiva per l'azione del pagamento
* Alcuni esempi di pagamento nell'applicazione web reale e studio dei vari json da dover modificare nella parte di chatbot, necessario per comprendere un modo per intraprendere una conversazione con il bot (quindi per la creazione effettiva delle abilità dell'intelligenza)
* Creati quindi gli issue: [pagamento a conosciuto](https://github.com/Wabri/BVChatBot/issues/5), [richieste all'intelligenza](https://github.com/Wabri/BVChatBot/issues/6), [pagamento a iban](https://github.com/Wabri/BVChatBot/issues/7)

## Day 18 [20/06/18] : 5,5 ore
* Continuato a imparare TypeScript (vedi repo: [TypeScript](https://www.typescriptlang.org/index.html))
* Riscritto il codice di [BVChatBot](https://github.com/Wabri/BVChatBot) in TypeScript
* Create le prime classi per la comunicazione effettiva dei socket

## Day 19 [21/06/18] : 7,5 ore
* Refactor del codice scritto ieri nella repo [BVChatBot](https://github.com/Wabri/BVChatBot)
* Tentativo di utilizzo della chiamata rest per estrapolare l'account e l'effettiva richiesta di pagamento
* Generati i primi [data set dell'intelligenza artificiale](https://github.com/Wabri/BVChatBot/tree/rasanlu/RASA_IA)
* Fatti alcuni test sui modelli creati utilizzando il prototipo del chatbot
* Spiegazione dell'architettura da usare per l'integrazione nell'applicativo web

## Day 20 [26/06/18] : 7 ore
* Cominciato a studiare [rasa core](https://core.rasa.com/) utile per far comunicare il bot con il backend spring e rispondere alle richieste dell'utente, ho rinominato la repository LearningRasaNLU in [LearningRasa](https://github.com/Wabri/LearningRasa)


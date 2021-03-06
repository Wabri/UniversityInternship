# UniversityInternship

Clicca questo [:point_down:](#fine-diario) per andare alla fine del diario.

<!-- HC.jar start -->
## Totale ore e giorni di tirocinio
| Mese | Ore | Giorni  |
| ------------- |:-------------:| -----:|
| Maggio | 80.0| 13|
| Giugno | 53.5| 9|
| Luglio | 61.5| 12|
| Agosto | 58.0| 9|
| Settembre | 47.0| 9|
| Totale | 300.0| 52|

#### Ultimo aggiornamento: 20/09/18
*Questa tabella è autogenerata da HoursCalculator*
<!-- HC.jar end -->

# Diario

## Day 01 [02/05/18] : 5,5 ore
[:point_left:](#universityinternship) [:point_right:](#day-02-030518--65-ore)
* Spiegazione architettura software
* Individato un percorso indicativo da seguire: AngularJS, Spring, ChatBot
* Inizio studio di AngularJS sul libro: AngularJS Up & Running Book for O'Reilly (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))
* Arrivato fino al capitolo 2 del libro (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))

## Day 02 [03/05/18] : 6,5 ore
[:point_left:](#day-01-020518--55-ore) [:point_right:](#day-03-080518--65-ore)
* Continuato lo studio di AngularJS fino al capitolo 3 (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))
* Varie prove di unit test usando Jasmine per l'implementazione dei test e Karma per il running

## Day 03 [08/05/18] : 6,5 ore
[:point_left:](#day-02-030518--65-ore) [:point_right:](#day-04-090518--7-ore)
* Continuato lo studio di AngularJS fino a capitolo 4 (vedi repository: [AngularJs](https://github.com/Wabri/angularJS-Up-And-Running))
* Studio del vecchio progetto chatBot su macchina remota
* Vari test su dialogflow per la generazione di file di configurazione JSON dell'intelligenza artificiale
* Analisi di un chatbot base (vedi repository: [girliemac/web-speech-ai](https://github.com/girliemac/web-speech-ai))

## Day 04 [09/05/18] : 7 ore
[:point_left:](#day-03-080518--65-ore) [:point_right:](#day-05-100518--4-ore)
* Creazione di un chatbot locale (vedi repository: [ChatBotPayments](https://github.com/Wabri/ChatBotPayments))
* Creazione di un prototipo di inteligenza artificiale per pagamenti usando [dialogflow](https://dialogflow.com)
* Tentativo di comprensione del vecchio prototipo (risultato: riesce solo a eseguire un singolo test e a generare un json con le diverse valute europee)

## Day 05 [10/05/18] : 4 ore
[:point_left:](#day-04-090518--7-ore) [:point_right:](#day-06-160518--75-ore)
* Continuato la stesura del codice del chatbot (vedi repository: [ChatBotPayments](https://github.com/Wabri/ChatBotPayments))
* Studio degli strumenti usati nella chat: [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), [Socket.io](https://socket.io/) , [API.AI](https://github.com/dialogflow/dialogflow-nodejs-client-v2)

## Day 06 [16/05/18] : 7,5 ore
[:point_left:](#day-05-100518--4-ore) [:point_right:](#day-07-170518--55-ore)
* Continuato lo studio di AngularJS fino al capitolo 6 (vedi: [AngularJSRepo](https://github.com/Wabri/angularJS-Up-And-Running))
* Continuato lo studio degli strumenti usati nella chat: [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), [Socket.io](https://socket.io/) , [API.AI](https://github.com/dialogflow/dialogflow-nodejs-client-v2)

## Day 07 [17/05/18] : 5,5 ore
[:point_left:](#day-06-160518--75-ore) [:point_right:](#day-08-220518--65-ore)
* Integrazione di una chat testuale al chatbot (vedi repository: [ChatBotPayments](https://github.com/Wabri/ChatBotPayments))

## Day 08 [22/05/18] : 6,5 ore
[:point_left:](#day-07-170518--55-ore) [:point_right:](#day-09-230518--65-ore)
* Studio della documentazione dello strumento open source [rasa](https://rasa.com/) che permette di usare strumenti di machine learning. Dovrebbe sostituire dialogflow permettendo di trattenere dati sensibili all'interno del server dedicato al software sviluppato evitando l'intermediario google.
* Creazione di alcuni esempi per l'utilizzo di [rasa](https://rasa.com/) (vedi repository: [LearningRasaNLU](https://github.com/Wabri/LearningRasa/))
* Installazione componenti necessari per sviluppo [rasa](https://rasa.com/) su sistema operativo windows: python, pip, [spacy](https://spacy.io/), rasa_nlu, rasa_core

## Day 09 [23/05/18] : 6,5 ore
[:point_left:](#day-08-220518--65-ore) [:point_right:](#day-10-240518--65-ore)
* Studio di Rasa NLU nei docs della pagina ufficiale [rasa](https://rasa.com/)
* Studio dell'architettura MVC con servizi Rest e [spring boot](https://spring.io/guides)
* Studio di un esempio spring e vari test usando swagger

## Day 10 [24/05/18] : 6,5 ore
[:point_left:](#day-09-230518--65-ore) [:point_right:](#day-11-290518--55-ore)
* Ricerca di un esempio di chat
* Tentativi di esecuzione di una comunicazione locale tra back-end
* Problemi con la comunicazione spring boot e grunt, la richiesta inviata tramite front-end non veniva accettata dal back-end in localhost quindi è stato necessario inserire una configurazione globale che potesse consentire lo scambio di dati

## Day 11 [29/05/18] : 5,5 ore
[:point_left:](#day-10-240518--65-ore) [:point_right:](#day-12-300518--6-ore)
* Revisione del codice frontend per integrare il codice della chat precedentemente creata [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Il codice frontend ha dato problemi quindi mi sono concentrato sulla modifica del [ChatBotPayments](https://github.com/Wabri/ChatBotPayments) per fare in modo che esegua una chiamata rest generica per una comunicazione base

## Day 12 [30/05/18] : 6 ore
[:point_left:](#day-11-290518--55-ore) [:point_right:](#day-13-310518--65-ore)
* Continuato la stesura e l'aggiornamento del [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Ho completato il cerchio di comunicazione tra il chatbot, dialogflow e backend

## Day 13 [31/05/18] : 6,5 ore
[:point_left:](#day-12-300518--6-ore) [:point_right:](#day-14-120618--75-ore)
* Risolto un bug nel codice [ChatBotPayments](https://github.com/Wabri/ChatBotPayments) e successivo miglioramento del codice, il risultato attualmente è: ![Chatbot](resources/prototype.PNG)
* Pubblicato il bot su [heroku](https://www.heroku.com/) all'indirizzo: [https://trainingchatbotbv.herokuapp.com/](https://trainingchatbotbv.herokuapp.com/) (non più aggiornato e mantenuto). in questo modo posso fare training su più dispositivi (per ora funziona solo su chrome)
* Studiato un modo per utilizzare [rasa_nlu](https://nlu.rasa.com/) per processare i messaggi del bot (vedi repository: [LearningRasaNLU](https://github.com/Wabri/LearningRasa))
* Creato un esempio di modello di training per l'intelligenza artificiale della chat, creato un server locale e eseguita una semplice chiamata ![rasaCall](resources/rasaCall.PNG)

## Day 14 [12/06/18] : 7,5 ore
[:point_left:](#day-13-310518--65-ore) [:point_right:](#day-15-130618--65-ore)
* Vari tentativi di connessione di [rasa_nlu](https://nlu.rasa.com/) con emulazione configurazione Dialogflow.
* Nella repository [LearningRasaNLU](https://github.com/Wabri/LearningRasa) sono riuscito a creare un modello a partire da file di configurazione di [dialogflow](https://dialogflow.com), all'interno di quella repository ho scritto anche degli appunti riassuntivi del processo di emulazione rasa dialogflow

## Day 15 [13/06/18] : 6,5 ore
[:point_left:](#day-14-120618--75-ore) [:point_right:](#day-16-140618--35-ore)
* Ripreso il lavoro di ieri, usando i dati di training fatto con dialogflow in precedenza ho completato il modello e finito i [primi appunti sull'uso di rasa](https://github.com/Wabri/LearningRasa/blob/master/README.md)
* Ho testato il funzionamento del backend rasa con formattazione dialogflow con un semplice testo "paga nomeCasuale 100 euro":

![jsonDialogflowFormatWithRasaServer.png](resources/jsonDialogflowFormatWithRasaServer.png)

* Ho poi confrontato con backend rasa con formattazione rasa con il solito testo:

![jsonRasaFormatGetFromRasa.png](resources/jsonRasaFormatGetFromRasa.png)

* Per curiosità ho eseguito una valutazione del prototipo del modello che sto usando e nonostante i pochi dati la matrice "intent confusion matrix" ha prodotto questo risultato:

![intentConfusionMatrix.png](resources/intentConfusionMatrix.png)

## Day 16 [14/06/18] : 3,5 ore
[:point_left:](#day-15-130618--65-ore) [:point_right:](#day-17-190618--45-ore)
* Ho modificato il codice del frontend [ChatBotPayments](https://github.com/Wabri/ChatBotPayments) per fare in modo che invii richieste a entrambi i backend.
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
[:point_left:](#day-16-140618--35-ore) [:point_right:](#day-18-200618--55-ore)
* Continuato a studiare [TypeScript](https://www.typescriptlang.org/index.html) seguendo la guida di [html.it](http://www.html.it/guide/guida-typescript/) e aggiornata la repository [LearningTypescript](https://github.com/Wabri/LearningTypescript)
* Comprensione della struttura interna effettiva per l'azione del pagamento
* Alcuni esempi di pagamento nell'applicazione web reale e studio dei vari json da dover modificare nella parte di chatbot, necessario per comprendere un modo per intraprendere una conversazione con il bot (quindi per la creazione effettiva delle abilità dell'intelligenza)
* Creati quindi gli issue: [pagamento a conosciuto](https://github.com/Wabri/ChatBotPayments/issues/5), [richieste all'intelligenza](https://github.com/Wabri/ChatBotPayments/issues/6), [pagamento a iban](https://github.com/Wabri/ChatBotPayments/issues/7)

## Day 18 [20/06/18] : 5,5 ore
[:point_left:](#day-17-190618--45-ore) [:point_right:](#day-19-210618--75-ore)
* Continuato a imparare TypeScript (vedi repo: [TypeScript](https://www.typescriptlang.org/index.html))
* Riscritto il codice di [ChatBotPayments](https://github.com/Wabri/ChatBotPayments) in TypeScript
* Create le prime classi per la comunicazione effettiva dei socket

## Day 19 [21/06/18] : 7,5 ore
[:point_left:](#day-18-200618--55-ore) [:point_right:](#day-20-260618--7-ore)
* Refactor del codice scritto ieri nella repo [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Tentativo di utilizzo della chiamata rest per estrapolare l'account e l'effettiva richiesta di pagamento
* Generati i primi [data set dell'intelligenza artificiale](https://github.com/Wabri/ChatBotPayments/tree/rasanlu/RASA_IA)
* Fatti alcuni test sui modelli creati utilizzando il prototipo del chatbot
* Spiegazione dell'architettura da usare per l'integrazione nell'applicativo web

## Day 20 [26/06/18] : 7 ore
[:point_left:](#day-19-210618--75-ore) [:point_right:](#day-21-270618--55-ore)
* Cominciato a studiare [rasa core](https://core.rasa.com/) utile per far comunicare il bot con il backend spring e rispondere alle richieste dell'utente, ho rinominato la repository LearningRasaNLU in [LearningRasa](https://github.com/Wabri/LearningRasa)

## Day 21 [27/06/18] : 5,5 ore
[:point_left:](#day-20-260618--7-ore) [:point_right:](#day-22-280618--6-ore)
* Proseguito lo studio di [rasa core](https://core.rasa.com/) aggiornando la repository [LearningRasa](https://github.com/Wabri/LearningRasa)

## Day 22 [28/06/18] : 6 ore
[:point_left:](#day-21-270618--55-ore) [:point_right:](#day-23-040718--35-ore)
* Creazione del primo rasa core nel [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Continuata la stesura degli appunti [LearningRasa](https://github.com/Wabri/LearningRasa)

## Day 23 [04/07/18] : 3,5 ore
[:point_left:](#day-22-280618--6-ore) [:point_right:](#day-24-050718--6-ore)
* Finito gli appunti su [LearningRasa](https://github.com/Wabri/LearningRasa)
* Creato i primi esempi di conversazione tra rasa core e rasa nlu (non funzionanti su macchina windows)

## Day 24 [05/07/18] : 6 ore
[:point_left:](#day-23-040718--35-ore) [:point_right:](#day-25-100718--65-ore)
* Continuato la stesura del modello corretto da usare per il bot [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Vari tentativi di esecuzione del server rasa core su macchina windows
* Decisione di usare una virtual machine (o docker) per l'uso del server rasa core
* Su macchina linux è completamente funzionante:

![rasaCoreServerWorkWithPostRequest.png](resources/rasaCoreServerWorkWithPostRequest.png)

## Day 25 [10/07/18] : 6,5 ore
[:point_left:](#day-24-050718--6-ore) [:point_right:](#day-26-110718--55-ore)
* Provato a usare la macchina virtuale [Oracle](https://www.virtualbox.org/) con [debian 9 base](https://www.debian.org/) per eseguire il server rasa_core
* Non avendo trovato un modo per effetturare una comunicazione con l'esterno ho abbandonato la vm e usato il mio pc con linux debian 9, modificando alcune impostazioni di [rasa](https://github.com/Wabri/ChatBotPayments/tree/master/RASA_IA) sono riuscito a comunicare da pc windows tramite post (vedi [chiamata post](https://github.com/Wabri/ChatBotPayments/blob/master/RASA_IA/README.MD#post-request-eseguire-il-curl))
* Non sono riuscito a effettuare la stessa chiamata all'interno dello script [index.js](https://github.com/Wabri/ChatBotPayments/blob/issue-rasanlu/index.js), ancora non ho capito perchè

## Day 26 [11/07/18] : 5,5 ore
[:point_left:](#day-25-100718--65-ore) [:point_right:](#day-27-120718--6-ore)
* Risolto il problema della post da client usando la libreria visionmedia [superagent](http://visionmedia.github.io/superagent/#test-documentation) (vedi repository: [github](https://github.com/visionmedia/superagent))
* Modificato l'index del frontend [ChatBotPayments](https://github.com/Wabri/ChatBotPayments) con una descrizione delle chiamate e delle modalità di esecuzione azioni di rasa
* creato una prima story di conversazione, replicabile con queste chiamate (ovviamente quando il server rasa è attivo):
![cWRP1](resources/conversationRasaParse1.PNG)
![cWRR1](resources/conversationRasaReply1.PNG)
![cWRP2](resources/conversationRasaParse2.PNG)
![cWRR2](resources/conversationRasaReply2.PNG)
* Ho cominciato a creare i vari intents su cui lavorare, aggiornando di conseguenza le azioni che defe fare il bot e l'aggiunta delle stories

## Day 27 [12/07/18] : 6 ore
[:point_left:](#day-26-110718--55-ore) [:point_right:](#day-28-170718--6-ore)
* Scritta la parte di comunicazione nel frontend per poter eseguire la comunicazione con rasa:

![cD1](resources/conversationDefault1.png)

![cD2](resources/conversationDefault2.png)

![cD3](resources/conversationDefault3.png)

* Generata una conversazione più complessa vedi repo [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)

## Day 28 [17/07/18] : 6 ore
[:point_left:](#day-27-120718--6-ore) [:point_right:](#day-29-180718--3-ore)
* Risoluzione di alcuni bug nel codice [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Modifica delle azioni del backend rasa core, ora tutte le azioni che fa sono determinate da classi python definite [qui](https://github.com/Wabri/ChatBotPayments/blob/master/RASA_IA/bot.py)
* Modificato il frontend in modo da prevedere la risposta e inviarla all'utente che ha effettuato la chiamata

## Day 29 [18/07/18] : 3 ore
[:point_left:](#day-28-170718--6-ore) [:point_right:](#day-30-190718--3-ore)
* Create nuove action per rasa CORE e modificate alcune configuration degli intent per rasa NLU

## Day 30 [19/07/18] : 3 ore
[:point_left:](#day-29-180718--3-ore) [:point_right:](#day-31-240718--65-ore)
* Refactor del codice front end [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Create nuove stories per rasa CORE e scoperto un mega bug per un typo sbagliato nell'intent [endConversation](https://github.com/Wabri/ChatBotPayments/blob/master/RASA_IA/data/intents/endConversation.json)

## Day 31 [24/07/18] : 6,5 ore
[:point_left:](#day-30-190718--3-ore) [:point_right:](#day-32-250718--6-ore)
* Piccole modifiche al frontend
* Creato la base a tutte le probabili azioni del bot (vedi [bot.py](https://github.com/Wabri/ChatBotPayments/blob/master/RASA_IA/bot.py)

## Day 32 [25/07/18] : 6 ore
[:point_left:](#day-31-240718--65-ore) [:point_right:](#day-33-260718--5-ore)
* Aggiornati i training di rasa_nlu con nuovi data set (vedi [intents](https://github.com/Wabri/ChatBotPayments/tree/master/RASA_IA/data/intents))
* Generata un nuovo set di [stories](https://github.com/Wabri/ChatBotPayments/blob/master/RASA_IA/newStories.md), l'ho fatto perchè la precedente configurazione dava problemi di riconoscimento che ora cercherò di risolvere procedendo con set and test delle storie

## Day 33 [26/07/18] : 5 ore
[:point_left:](#day-32-250718--6-ore) [:point_right:](#day-34-310718--45-ore)
* Continuato a lavorare sulle [stories](https://github.com/Wabri/ChatBotPayments/blob/master/RASA_IA/newStories.md), è probabile che stia sbagliando qualcosa dato che se aggiungo nuove stories non riesce più a comprendere come continuare la conversazione

## Day 34 [31/07/18] : 4,5 ore
[:point_left:](#day-33-260718--5-ore) [:point_right:](#day-35-010818--65-ore)
* Fattorizzate le azioni del bot
* Create nuove storie
* Definita l'architettura da usare per bypassare l'autenticazione diretta usando rasa

## Day 35 [01/08/18] : 6,5 ore
[:point_left:](#day-34-310718--45-ore) [:point_right:](#day-36-020818--65-ore)
* Fattorizzate le azioni del bot
* Aggiornato le dipendenze e di conseguenza creato problemi di creazione server rasa_core
* Risolto anche se con molti warning da parte del debug

## Day 36 [02/08/18] : 6,5 ore
[:point_left:](#day-35-010818--65-ore) [:point_right:](#day-37-140818--7-ore)
* Creata la prima comunicazione frontend-rasa-backend-rasa-frontend funzionante:

![chatAccountList.gif](resources/chatListTest.gif)

* Definita l'architettura per completare il progetto (mono account, pagamento specifico)

## Day 37 [14/08/18] : 7 ore
[:point_left:](#day-36-020818--65-ore) [:point_right:](#day-38-210818--75-ore)
* Modificato e aggiunto alcune azioni e intenti nel codice del chatbot
* Ci sono le ultime modifiche da fare prima dell'integrazione
* Non ho eseguito i test dell'effettivo funzionamento del pagamento tramite chat
* l'xcrsf e il jsession è necessario inserirli tramite frontend con una chiamata altrimenti non può eseguire le chiamate

## Day 38 [21/08/18] : 7,5 ore
[:point_left:](#day-37-140818--7-ore) [:point_right:](#day-39-220818--65-ore)

* Aggiornate le azioni di rasa_core
* Trovato il modo di fare il pagamento, sono 3 chiamate in sequenza: validatePayment (post, dove vengono validate le informazioni del pagamento), transactionProtection (post, viene controllato se il pagamento supera il transaction protection e restituisce il codice per effettuare il pagamento), safePayment (get, viene effettuato infine il pagamento usando il token restituito dalla post precedente)
* Non sono ancora in grado di effettuare il pagamento tramite rasa, mi mancano alcune informazioni specifiche dell'architettura

## Day 39 [22/08/18] : 6,5 ore
[:point_left:](#day-38-210818--75-ore) [:point_right:](#day-40-230818--55-ore)

* Completato il prototipo del bot
* Il pagamento tramite chat è possibile attualmente solo da destinatari già abilitati (ci ho messo tutto il giorno per capirlo)
* Ci sono ancora problemi con il microfono
* Manca l'ultimo passaggio che è quello dell'integrazione

## Day 40 [23/08/18] : 5,5 ore
[:point_left:](#day-39-220818--65-ore) [:point_right:](#day-41-280818--7-ore)

* Eseguito il merge dei branch di sviluppo di [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Stesura della documentazione di [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)

## Day 41 [28/08/18] : 7 ore
[:point_left:](#day-40-230818--55-ore) [:point_right:](#day-42-290818--5-ore)

* Iniziata l'integrazione nel sito dove dovrà essere usata la chat

## Day 42 [29/08/18] : 5 ore
[:point_left:](#day-41-280818--7-ore) [:point_right:](#day-43-300818--65-ore)

* Continuata l'integrazione nel sito dove dovrà essere usata la chat

## Day 43 [30/08/18] : 6,5 ore
[:point_left:](#day-42-290818--5-ore) [:point_right:](#day-44-040918--6-ore)

* Studiato un metodo di sostituzione del framework [socket.io](https://socket.io/) con [angular-socket-io](https://github.com/btford/angular-socket-io), decisamente più difficile
* Effettuato porting nel controller grazie a [angular-socket-io](https://www.npmjs.com/package/angular-socket-io), ora il problema rimane nello script in cui non so come usare il solito socket per comunicare

## Day 44 [04/09/18] : 6 ore
[:point_left:](#day-43-300818--65-ore) [:point_right:](#day-45-050918--65-ore)

* Continuata l'integrazione
* Il controller sarà l'unico a gestire sia la chiamata verso rasa che la gestione dell'index usando i moduli di angularjs
* Ancora non funziona perchè c'è un problema per quanto riguarda l'Access-Control-Allow-Credentials

## Day 45 [05/09/18] : 6,5 ore
[:point_left:](#day-44-040918--6-ore) [:point_right:](#day-46-060918--6-ore)

* Completata la fase di integrazione fisica, sussiste però il problema del jsession e del xrftoken che non riesco a passare per problemi di autorizzazioni

## Day 46 [06/09/18] : 6 ore
[:point_left:](#day-45-050918--65-ore) [:point_right:](#day-47-110918--35-ore)

* refactor del codice

## Day 47 [11/09/18] : 3,5 ore
[:point_left:](#day-46-060918--6-ore) [:point_right:](#day-48-120918--6-ore)

* Risoluzione problema di compilazione sbagliata del payload di una chiamata.
* Aggiornamento del codice
* Ricerca di un modo di speech recognition per angularjs
* Ricerca di un metodo per il synth voice su angularjs

## Day 48 [12/09/18] : 6 ore
[:point_left:](#day-47-110918--35-ore) [:point_right:](#day-49-130918--6-ore)

* Problemi con il porting del server rasa dalla mia macchina al server
* Problema risolto, l'ultima versione di rasa è incompatibile con i config della precedente versione
* Creato script e requirement per il server rasa
* Server rasa ora in ascolto

## Day 49 [13/09/18] : 6 ore
[:point_left:](#day-48-120918--6-ore) [:point_right:](#day-48-180918--6-ore)

* Aggiornamento documentazione della repository [ChatBotPayments](https://github.com/Wabri/ChatBotPayments)
* Creata la documentazione nel sito ufficiale wiki Best Vision

## Day 50 [18/09/18] : 6 ore
[:point_left:](#day-49-130918--6-ore) [:point_right:](#day-50-190918--4-ore)

* Aggiornato il codice Frontend per fare synth voice e speech recognition
* Fatta lezione rasa

## Day 51 [19/09/18] : 4 ore
[:point_left:](#day-50-180918--6-ore) [:point_right:](#day-52-200918--3-ore)

* Fatta seconda lezione rasa
* Creato un environment all'interno del server su cui poter far test e modifiche

## Day 52 [20/09/18] : 3 ore
[:point_left:](#day-51-190918--4-ore) [:point_right:](#fine-diario)

* Aggiornato il codice del server

### Fine Diario
Clicca questo [:point_up:](#universityinternship) per tornare all'inizio del diario.

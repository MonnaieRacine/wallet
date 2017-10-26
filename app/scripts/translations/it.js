/*

    Copyright © 2016-2017 Dominique Climent, Florian Dubath

    This file is part of Monnaie-Leman Wallet.

    Monnaie-Leman Wallet is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Monnaie-Leman Wallet is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Monnaie-Leman Wallet.  If not, see <http://www.gnu.org/licenses/>.

*/
// Italian
// Last sync with en.js: commit 3ee6e18a0a72587c010a99e5ae015e766f48859e
'use strict';
var it = function() {}
it.code = 'it';
it.data = {

  /* Navigation*/
  NAV_YourWallets:      'I tuoi portafogli',
  NAV_AddWallet:        'Aggiungi portafoglio',
  NAV_GenerateWallet:   'Genera portafoglio',
  NAV_BulkGenerate:     'Generazione multipla',
  NAV_SendEther:        'Invia ether',
  NAV_SendTokens:       'Invia token',
  NAV_Offline:          'Invia offline',
  NAV_WithdrawDAO:      'Preleva DAO',
  DAO_TitleLong:        'Preleva i tuoi token DAO convertendoli in ETH',
  NAV_ClaimDGD:         'Richiedi DGD',
  DGD_TitleLong:        'Richiedi i tuoi token DGD',
  NAV_DeployContract:  'Pubblica contratto',
  NAV_MyWallets:        'I miei portafogli',
  NAV_ViewWallet:       'Informazioni portafoglio',
  NAV_Help:             'Aiuto',
  NAV_Contact:          'Contatti',

  /* General */
  x_Password:           'Password',
  x_Download:           'Download',
  x_Address:            'Il tuo indirizzo',
  x_Save:               'Salva',
  x_Cancel:             'Annulla',
  x_AddessDesc:         'Potresti sentirlo chiamare "Numero di conto" o "Chiave pubblica". È ciò che dai a chi ti vuole inviare degli ether. L\'icona è un modo facile di riconoscere il tuo indirizzo.',
  x_PrivKey:            'Chiave privata (non crittografata)',
  x_PrivKey2:           'Chiave privata',
  x_PrivKeyDesc:        'Questa è la versione testuale non crittografata della tua chiave privata, il che significa che non serve una password. Se qualcuno trovasse la tua chiave privata non crittografata potrebbe avere accesso al tuo portafoglio senza una password. Per questa ragione di solito si consigliano le versioni crittografate.',
  x_Keystore:           'File Keystore/JSON (Consigliato · Crittografato · Formato Mist/Geth)',
  x_Keystore2:          'File Keystore / JSON',
  x_KeystoreDesc:       'Questo file Keystore/JSON è compatibile con il formato usato da Mist e Geth, in modo da poterlo facilmente importare in futuro. È il file consigliato da scaricare e conservare.',
  x_Json:               'File JSON (non crittografato)',
  x_JsonDesc:           'Questa è la tua chiave privata in formato JSON non crittografato. Significa che non hai bisogno della password, ma chiunque trovi questo file JSON potrà avere accesso al tuo portafoglio e ai tuoi ether senza password.',
  x_PrintShort:         'Stampa',
  x_Print:              'Stampa portafoglio cartaceo',
  x_PrintDesc:          'Suggerimento Pro: Fai clic su stampa e salvalo come PDF, anche se non hai una stampante!',
  x_CSV:                'File CSV (non crittografato)',
  x_TXT:                'File TXT (non crittografato)',
  x_Wallet:             'Portafoglio',

  /* Header */
  MEW_Warning_1:        'Controlla sempre l\'URL prima di accedere al tuo portafoglio o di crearne uno nuovo. Fai attenzione ai siti di phishing!',
  CX_Warning_1:         'Assicurati di avere **dei backup esterni** di ogni portafoglio salvato qui. Ci sono molte cose che potrebbero causare la perdita dei dati di questa estensione di Chrome, come la disinstallazione e reinstallazione dell\'estensione. Questa estensione è un mezzo per accedere facilmente ai tuoi portafogli, **non** un modo di salvarli al sicuro.',
  MEW_Tagline:          'Portafoglio ether JavaScript lato client Open Source',
	CX_Tagline:           'Portafoglio ether JavaScript lato client Open Source (Estensione Chrome)',

  /* Footer */
  FOOTER_1:             'Uno strumento open source, in javascript, lato client per generare portafogli Ethereum e inviare transazioni.',
  FOOTER_1b:            'Creato da',
  FOOTER_2:             'Donazioni molto apprezzate:',
  FOOTER_3:             'Generazione portafogli lato client da parte di',
  FOOTER_4:             'Dichiarazione di non responsabilità',

  /* Sidebar */
  sidebar_AccountInfo:  'Informazioni conto: ',
  sidebar_AccountAddr:  'Indirizzo conto: ',
  sidebar_AccountBal:   'Saldo conto: ',
  sidebar_TokenBal:     'Saldo token: ',
  sidebar_Equiv:        'Valori equivalenti: ',
  sidebar_TransHistory: 'Storico transazioni: ',
  sidebar_DGDBal:       'Informazioni crowdsale DGD:',
  sidebar_donation:     'MyEtherWallet è un servizio gratuito e open-source votato alla tua privacy e sicurezza. Più donazioni riceviamo, più tempo dedichiamo a creare nuove funzionalità, considerare i tuoi commenti, e darti ciò che vuoi. Siamo solo due persone che provano a cambiare il mondo. Ci aiuti?',
  sidebar_donate:       'Dona',
  sidebar_thanks:       'GRAZIE!!!',

  /* Decrypt Panel */
  decrypt_Access:         'Come vuoi accedere al tuo portafoglio?',
  decrypt_Title:          'Seleziona il formato della tua chiave privata:',
  decrypt_Select:         'Seleziona un portafoglio:',

  /* Add Wallet */
  ADD_Label_1:            'Cosa vuoi fare?',
  ADD_Radio_1:            'Genera un nuovo portafoglio',
  ADD_Radio_2:            'Seleziona il file del tuo portafoglio (Keystore / JSON)',
  ADD_Radio_2_alt:        'Seleziona il file del tuo portafoglio: ',
  ADD_Radio_2_short:      'SELEZIONA FILE PORTAFOGLIO...',
  ADD_Radio_3:            'Incolla/Inserisci la tua chiave privata ',
  ADD_Radio_4:            'Aggiungi un conto da osservare',
  ADD_Label_2:            'Crea un nome:',
  ADD_Label_3:            'Il portafoglio è crittografato. Inserire la password: ',
  ADD_Label_4:            'Aggiungi un conto da osservare',
  ADD_Warning_1:          'Puoi aggiungere qualunque conto da "osservare" nella scheda dei portafogli senza caricare una chiave privata. Ciò ** non ** significa che avrai accesso a quel portafoglio, né che potrai trasferire gli Ether lì contenuti.',
  ADD_Label_5:            'Inserisci l\'indirizzo: ',
  ADD_Label_6:            'Sblocca portafoglio: ',
  ADD_Label_6_short:      'Sblocca',
  ADD_Label_7:            'Aggiungi conto',

  /* Generate Wallets */
  GEN_desc:               'Se vuoi generare più portafogli, puoi farlo qui: ',
  GEN_Label_1:            'Inserisci una password robusta (almeno 9 caratteri)',
  GEN_Placeholder_1:      'NON dimenticarti di salvarla!',
  GEN_SuccessMsg:         'Perfetto! Il tuo portafoglio è stato generato.',
  GEN_Warning:            '**Avrai bisogno del tuo file Keystore/JSON e della password o della chiave privata** per avere accesso a questo portafoglio in futuro. Ti preghiamo di salvarlo e copiarlo su un supporto esterno! Non c\'è alcun modo per recuperare un portafoglio se non lo salvi. Leggi la [pagina di aiuto](https://www.myetherwallet.com/#help) per le istruzioni.',
  GEN_Label_2:            'Salva il tuo file Keystore/JSON o la chiave privata. Non dimenticare la password che hai inserito.',
  GEN_Label_3:            'Salva il tuo indirizzo.',
  GEN_Label_4:            'Stampa il tuo portafoglio cartaceo, o salva una versione QR code. (facoltativo)',

  /* Bulk Generate Wallets */
  BULK_Label_1:           'Numero di portafogli da generare',
  BULK_Label_2:           'Genera portafogli',
  BULK_SuccessMsg:        'Perfetto! I tuoi portafogli sono stati generati.',

  /* Sending Ether and Tokens */
  SEND_addr:             'Indirizzo destinatario: ',
  SEND_amount:           'Importo da inviare: ',
  SEND_amount_short:     'Importo',
  SEND_custom:           'Altro',
  SEND_gas:              'Gas',
  SEND_generate:         'Genera transazione',
  SEND_raw:              'Transazione grezza',
  SEND_signed:           'Transazione firmata',
  SEND_trans:            'Invia transazione',
  SEND_TransferTotal:    'Invia l\'intero saldo',
  SENDModal_Title:       'Attenzione! ',
  /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
  SENDModal_Content_1:   'Stai per inviare',
  SENDModal_Content_2:   'all\'indirizzo',
  SENDModal_Content_3:   'Sei sicuro di volerlo fare?',
  SENDModal_Content_4:   'NOTA: Se ricevi un errore, molto probabilmente dovrai aggiungere ether al tuo conto per coprire il costo del gas necessario ad inviare i token. Il gas si paga in ether.',
  SENDModal_No:          'No, tiratemi fuori da qui!',
  SENDModal_Yes:         'Sì, sono sicuro! Esegui la transazione.',

  /* Tokens */
  TOKEN_Addr:            'Indirizzo: ',
  TOKEN_Symbol:          'Simbolo del token: ',
  TOKEN_Dec:             'Decimali: ',

  /* Send Transaction */
  TRANS_desc:            'Se invece volevi inviare dei token, utilizza la pagina "Invia token".',
  TRANS_warning:         'Se usi le opzioni "Solo ETH" o "Solo ETC" invierai tramite un contratto. Certi servizi hanno difficoltà ad accettare queste transazioni. Leggi tutto.',
  TRANS_standard:        'ETH (transazione standard)',
  TRANS_eth:             'Solo ETH',
  TRANS_etc:             'Solo ETC',
  TRANS_advanced:        '+Avanzate: aggiungi più gas o dei dati ',
  TRANS_data:            ' Dati: ',
  TRANS_gas:             ' Gas: ',
  TRANS_sendInfo:        'Una transazione standard che utilizza 21000 gas costerà 0,000441 ETH. Utilizziamo un prezzo del gas leggermente al di sopra del minimo pari a 0,000000021 ETH per assicurarci che venga elaborata velocemente. Noi non prendiamo commissioni.',

  /* Send Transaction Modals */
  TRANSModal_Title:      'Transazioni "Solo ETH" e "Solo ETC"',
  TRANSModal_Content_0:  'Una nota sulle varie transazioni e sui vari servizi:',
  TRANSModal_Content_1:  '**ETH (transazione standard): ** Genera una transazione di default direttamente da un indirizzo ad un altro. La quantità di gas predefinita è 21000. È probabile che ogni ETH inviato con questo metodo sarà replicato sulla catena ETC.',
  TRANSModal_Content_2:  '**Solo ETH: ** Invia tramite [il contratto di protezione dalle repliche di Timon Rapp (come consigliato da VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) in modo da inviare solamente sulla catena **ETH**.',
  TRANSModal_Content_3:  '**Solo ETC: ** Invia tramite [il contratto di protezione dalle repliche di Timon Rapp (come consigliato da VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) in modo da inviare solamente sulla catena **ETC**. ',
  TRANSModal_Content_4:  '**Coinbase & ShapeShift: ** Inviare solamente tramite la transazione standard. Se utilizzi i contratti "Solo XXX", dovrai metterti in contatto con il loro staff di supporto in modo che aggiornino manualmente il tuo saldo o ti rimborsino. [Puoi anche provare lo strumento "split" di Shapeshift.](https://split.shapeshift.io/)',
  TRANSModal_Content_5:  '**Kraken & Poloniex:** Nessun problema noto. Usa qualunque opzione.',
  TRANSModal_Yes:        'Bene, ho capito.',
  TRANSModal_No:         'Oh no, sono ancora più confuso. Aiuto.',

  /* Offline Transaction */
  OFFLINE_Title:         'Genera & invia una transazione offline',
  OFFLINE_Desc:          'Per generare transazioni offline sono necessari tre passaggi. Svolgerai i passi 1 e 3 su un computer online, e il passo 2 su un computer offline/*air-gapped*. Questo per assicurarsi che le tue chiavi private non tocchino un dispositivo connesso a Internet.',
  OFFLLINE_Step1_Title:  'Passo 1: generazione delle informazioni (computer online)',
  OFFLINE_Step1_Button:  'Genera informazioni',
  OFFLINE_Step1_Label_1: 'Indirizzo mittente: ',
  OFFLINE_Step1_Label_2: 'Nota: Questo è l\'indirizzo MITTENTE, non l\'indirizzo DESTINATARIO. Il *nonce* è generato dal conto di origine. Se stessi usando un computer *air-gapped*, sarebbe l\'indirizzo del conto offline.',
  OFFLINE_Step2_Title:   'Passo 2: generazione della transazione (computer offline)',
  OFFLINE_Step2_Label_1:  'Indirizzo destinatario: ',
  OFFLINE_Step2_Label_2:  'Valore / importo da inviare',
  OFFLINE_Step2_Label_3:  'Prezzo gas ',
  OFFLINE_Step2_Label_3b: 'Questo valore è stato mostrato nel passo 1 sul computer online.',
  OFFLINE_Step2_Label_4:  'Limite gas ',
  OFFLINE_Step2_Label_4b: '21000 è il limite gas predefinito. Quando invii a contratti o aggiungi dati potresti aver bisogno di un valore maggiore. Eventuale gas non utilizzato ti sarà restituito.',
  OFFLINE_Step2_Label_5:  'Nonce',
  OFFLINE_Step2_Label_5b: 'Questo valore è stato mostrato nel passo 1 sul computer online.',
  OFFLINE_Step2_Label_6:  'Dati',
  OFFLINE_Step2_Label_6b: 'Facoltativo. I dati sono usati spesso nelle transazioni inviate ai contratti.',
  OFFLINE_Step2_Label_7:  'Inserisci / seleziona la tua chiave privata o JSON.',
  OFFLINE_Step3_Title:    'Passo 3: Invia / pubblica la transazione (computer online)',
  OFFLINE_Step3_Label_1:  'Incolla la transazione firmata dal passo 2 qui e premi il pulsante "INVIA TRANSAZIONE".',

  /* DAO */
  DAO_bal1:               'al blocco 1.919.999',
  DAO_bal2:               'adesso',
  DAO_TitleETH:           'Preleva DAO e ricevi ETH',
  DAO_TitleETC:           'Preleva DAO e ricevi ETC',
  DAO_ETC_Label_1:        'A che indirizzo vuoi che vengano inviati i tuoi ETC?',
  DAO_ETC_Label_2:        'Il gruppo "White Hat" ha lavorato senza sosta per farti riavere i tuoi ETC. Puoi dire "grazie" donando una percentuale della somma che prelevi, se lo desideri. ',
  DAO_Desc:               'Usa questa scheda per prelevare i tuoi token DAO e ottenere ETH **& ETC**. Se invece vuoi inviare token DAO, utilizza la scheda "Invia token".',
  DAO_Inst:               'Sì. Devi solo premere questo grosso pulsante rosso. È davvero così semplice.',
  DAO_Warning:            'Se ricevi l\'errore "Saldo insufficiente per il gas", è perché devi avere una piccola quantità di ether nel tuo conto per coprire i costi del gas. Aggiungi 0,001 ETH a questo conto e riprova. ',
  DAOModal_Title:         'Tanto per essere sicuri...',
  // full sentence is "You are about to withdraw 100 DAO tokens to address 0x12344 for 1 ETH.
  DAOModal_1:             'Stai per prelevare',
  DAOModal_2:             'token DAO inviando a',
  DAOModal_3:             'una somma di', // "in return for"

  /* Digix */
  DGD_Desc:               'Richiedi i tuoi token e le tue medaglie DigixDAO (DGD). Per poterli richiedere devi aver partecipato alla vendita dei token del 30 e 31 marzo 2016.  Se invece desideri inviare DGD, utilizza la scheda "Invia token".',
  DGD_Label_1:            'Stima commissione utilizzata:',
  DGD_Label_2:            'Commissione massima fornita:',
  DGD_Label_3:            'Prezzo gas:',
  DGD_Generate:           'Genera richiesta',
  DGD_Content:            'Stai per richiedere i tuoi token DGD.',

  /* Deploy Contracts */
  DEP_generate:        'Genera bytecode',
  DEP_generated:       'Bytecode generato',
  DEP_signtx:          'Firma transazione',
  DEP_interface:       'Interfaccia generata',

  /* My Wallet */
  MYWAL_Nick:             'Nome portafoglio',
  MYWAL_Address:          'Indirizzo portafoglio',
  MYWAL_Bal:              'Saldo',
  MYWAL_Edit:             'Modifica',
  MYWAL_View:             'Mostra',
  MYWAL_Remove:           'Rimuovi',
  MYWAL_RemoveWal:        'Rimozione portafoglio:',
  MYWAL_WatchOnly:        'I tuoi conti osservati',
  MYWAL_Viewing:          'Dettagli portafoglio: ',
  MYWAL_Hide:             'Nascondi informazioni portafoglio',
  MYWAL_Edit_2:           'Modifica portafoglio: ',
  MYWAL_Name:             'Nome portafoglio',
  MYWAL_Content_1:        'Attenzione! Stai per rimuovere il tuo portafoglio: ',
  MYWAL_Content_2:        'Assicurati di aver **salvato la chiave privata e/o il file Keystore e la password** prima di rimuoverlo.',
  MYWAL_Content_3:        'Se vorrai utilizzare questo portafoglio con MyEtherWallet CX in futuro, dovrai ri-aggiungerlo manualmente tramite la chiave privata/JSON e password.',

  /* View Wallet Details */
  VIEWWALLET_Subtitle:      'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. Potresti volerlo fare per  [importare il tuo conto in Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Se vuoi controllare il tuo saldo, ti consigliamo di utilizzare uno strumento per esplorare la *blockchain* come [etherscan.io](http://etherscan.io/).',
  VIEWWALLET_Subtitle_Short: 'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. ',
  VIEWWALLET_SuccessMsg:     'Perfetto! Questi sono i dettagli del tuo portafoglio.',

  /* CX */
  CX_error_1:           'Non c\'è nessun portafoglio. Fai clic su ["Aggiungi portafoglio"](/cx-wallet.html#add-wallet) per aggiungerne uno!',
  CX_quicksend:         'Invio rapido',

  /* Error Messages */
  ERROR_1:              'Ti preghiamo di inserire una quantità valida.',
  ERROR_2:              'La password deve essere di almeno 9 caratteri. Assicurati che sia robusta. ',
  ERROR_3:              'Siamo spiacenti! Non riconosciamo questo tipo di file portafoglio. ',
  ERROR_4:              'Questo non è un file portafoglio valido. ',
  ERROR_5:              'Questa unità non esiste, ti preghiamo di usare una delle seguenti unità ',
  ERROR_6:              'Indirizzo non valido. ',
  ERROR_7:              'Password non valida. ',
  ERROR_8:              'Numero non valido. ',
  ERROR_9:              'Limite gas non valido. ',
  ERROR_10:             'Valori dati non validi. ',
  ERROR_11:             'Quantità di gas non valida. ',
  ERROR_12:             'Nonce non valido. ',
  ERROR_13:             'Transazione firmata non valida. ',
  ERROR_14:             'Esiste già un portafoglio con questo nome. ',
  ERROR_15:             'Portafoglio non trovato. ',
  ERROR_16:             'Sembra che non esista ancora una proposta con questo ID o c\'è un errore nella lettura della proposta. ',
  ERROR_17:             'C\'è già un portafoglio con questo indirizzo fra quelli salvati. Controlla la pagina dei tuoi portafogli. ',
  ERROR_18:             'Devi avere almeno 0,001 ETH nel conto per coprire i costi del gas. Aggiungi un po\' di ether e riprova. ',
  ERROR_19:             'Questa transazione consumerebbe tutto il gas. Ciò significa che hai già votato questa proposta o che il periodo di discussione è terminato.',
  ERROR_20:             'Simbolo non valido',
  SUCCESS_1:            'Indirizzo valido',
  SUCCESS_2:            'Portafoglio decodificato correttamente',
  SUCCESS_3:            'Transazione inviata. TX ID: ',
  SUCCESS_4:            'Il portafoglio è stato aggiunto correttamente: ',
  SUCCESS_5:            'Hai votato con successo. Grazie per essere un partecipante attivo in The DAO.',
  SUCCESS_6:            'File selezionato: ',

  /* Geth Error Messages */
  GETH_InvalidSender:      'Mittente non valido',
  GETH_Nonce:              'Nonce troppo basso',
  GETH_Cheap:              'Prezzo del gas troppo basso per essere accettato',
  GETH_Balance:            'Saldo insufficiente',
  GETH_NonExistentAccount: 'Il conto non esiste o il saldo è insufficiente',
  GETH_InsufficientFunds:  'Fondi insufficienti per gas * prezzo + valore',
  GETH_IntrinsicGas:       'Gas intrinseco troppo basso',
  GETH_GasLimit:           'Eccede il limite gas per il blocco',
  GETH_NegativeValue:      'Valore negativo',

  /* Tranlsation Info */
  translate_version:    '0.3',
  Translator_Desc:      'Grazie ai nostri traduttori: ',
  TranslatorName_1:     '[ugilio](https://www.myetherwallet.com/?gaslimit=21000&to=0x1234567890abcdef1234567890abcdef12345678&value=1.0#send-transaction)',
  TranslatorAddr_1:     '0x1234567890abcdef1234567890abcdef12345678',
  /* Translator 1: Insert Comments Here */
  TranslatorName_2:     ' ',
  TranslatorAddr_2:     ' ',
  /* Translator 2: Insert Comments Here */
  TranslatorName_3:     ' ',
  TranslatorAddr_3:     ' ',
  /* Translator 3: Insert Comments Here */
  TranslatorName_4:     ' ',
  TranslatorAddr_4:     ' ',
  /* Translator 4: Insert Comments Here */
  TranslatorName_5:     ' ',
  TranslatorAddr_5:     ' ',
  /* Translator 5: Insert Comments Here */

  /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
  HELP_Warning:       'Se hai creato un portafoglio -oppure- hai scaricato il repository prima del **31 Dicembre 2015**, controlla i tuoi portafogli e scarica una nuova versione del repository. Fai clic qui per i dettagli.',
  HELP_Desc:          'Vedi che manca qualcosa? Hai un\'altra domanda? [Mettiti in contatto con noi](mailto:myetherwallet@gmail.com), e non solo risponderemo alla tua domanda, ma aggiorneremo anche questa pagina in modo che sia più utile ad altri in futuro!',
  HELP_Remind_Title:  'Qualche promemoria',
  HELP_Remind_Desc_1: '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, e alcune delle librerie Javascript che utilizziamo sono in continuo sviluppo.** Anche se abbiamo testato approfonditamente e persone di tutto il mondo hanno correttamente creato decine di migliaia di portafogli, c\'è sempre la remota possibilità che accada qualcosa di imprevisto che provochi la perdita dei tuoi ETH. Ti preghiamo di non investire più di quello che sei disposto a perdere, e di fare attenzione. Se dovesse capitare qualcosa, ci dispiace, ma **non siamo responsabili per gli ether perduti**.',
  HELP_Remind_Desc_2: 'MyEtherWallet.com & MyEtherWallet CX non sono "portafogli web". Non stai creando un account né ci stai dando i tuoi ether da custodire. Tutti i dati non lasciano mai il tuo computer/il tuo browser. Quello che facciamo è renderti facile creare, salvare, e accedere alle tue informazioni e interagire con la *blockchain*.',
  HELP_Remind_Desc_3: 'Se non salvi la tua chiave privata e la password, non c\'è modo di recuperare l\'accesso al tuo portafoglio o ai fondi che contiene.  Salvali in molti luoghi fisici diversi e non solo sul tuo computer!',

  HELP_0_Title:        '0) Sono nuovo. Cosa faccio?',
  HELP_0_Desc_1:       'MyEtherWallet ti dà la possibilità di generare nuovi portafogli in modo da poter conservare i tuoi ether da solo, invece di usare una piattaforma di scambio. Questo processo avviene interamente sul tuo computer, non sui nostri server. Quindi, quando generi un nuovo portafoglio, **sei responsabile del suo salvataggio in maniera sicura**.',
  HELP_0_Desc_2:       'Crea un nuovo portafoglio.',
  HELP_0_Desc_3:       'Fai un backup del portafoglio.',
  HELP_0_Desc_4:       'Verifica di avere accesso a questo nuovo portafoglio e di avere salvato correttamente tutte le informazioni necessarie.',
  HELP_0_Desc_5:       'Trasferisci degli ether in questo nuovo portafoglio.',

  HELP_1_Title:        '1) Come creo un nuovo portafoglio? ',
  HELP_1_Desc_1:       'Vai alla pagina "Genera portafoglio".',
  HELP_1_Desc_2:       'Vai alla pagina "Aggiungi portafoglio" e seleziona "Genera un nuovo portafoglio"',
  HELP_1_Desc_3:       'Inserisci una password robusta. Se pensi di poterla dimenticare, salvala in un posto sicuro. Avrai bisogno di questa password per inviare transazioni.',
  HELP_1_Desc_4:       'Fai clic su "GENERA PORTAFOGLIO".',
  HELP_1_Desc_5:       'Il tuo portafoglio è stato appena generato.',

  HELP_2a_Title:       '2a) Come salvo o faccio il backup del mio portafoglio?',
  HELP_2a_Desc_1:      'Dovresti sempre fare dei backup esterni in diversi luoghi fisici - come su una penna USB e/o su un pezzo di carta.',
  HELP_2a_Desc_2:      'Salva l\'indirizzo. Puoi tenerlo per te o condividerlo. In questo modo gli altri possono inviarti degli ether.',
  HELP_2a_Desc_3:      'Salva delle versioni della chiave privata. Non condividerla con nessuno. La tua chiave privata è necessaria quando vuoi accedere ai tuoi ether per trasferirli! Ci sono 3 tipi di chiave privata:',
  HELP_2a_Desc_4:      'Metti il tuo indirizzo, le versioni della chiave privata, e la versione PDF del tuo portafoglio cartaceo in una cartella. Salvala sul tuo computer e su una penna USB.',
  HELP_2a_Desc_5:      'Stampa il portafoglio se hai una stampante. In alternativa, trascrivi la tua chiave privata e l\'indirizzo su un pezzo di carta. Conserva questo foglio in un posto sicuro, separato dal tuo computer e dalla penna USB.',
  HELP_2a_Desc_6:      'Ricorda, devi evitare la perdita delle chiavi e della password in caso di smarrimento o malfunzionamento del tuo hard disk, penna USB, o pezzo di carta. Devi anche considerare la perdita fisica o il danneggiamento di una intera area (pensa a incendi o inondazioni).',

  HELP_2b_Title:       '2b) Come implemento un portafoglio offline in maniera sicura con MyEtherWallet?',
  HELP_2b_Desc_1:      'Vai sul nostro github: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages).',
  HELP_2b_Desc_2:      'Fai clic su "download zip" in alto a destra.',
  HELP_2b_Desc_3:      'Sposta il file zip su un computer *air-gapped*.',
  HELP_2b_Desc_4:      'Decomprimilo e fai doppio clic su `index.html`.',
  HELP_2b_Desc_5:      'Genera un portafoglio con una password robusta.',
  HELP_2b_Desc_6:      'Salva l\'indirizzo. Salva delle versioni della chiave privata. Salva la password se potresti non ricordarla per sempre.',
  HELP_2b_Desc_7:      'Conserva questi fogli / penne USB in diversi luoghi fisici separati.',
  HELP_2b_Desc_8:      'Vai alla pagina "Informazioni portafoglio" e digita la tua chiave privata / password per assicurarti che siano corrette e per accedere al portafoglio. Controlla che l\'indirizzo che hai trascritto sia lo stesso.',

  HELP_3_Title:         '3) Come verifico di aver accesso al mio nuovo portafoglio?',
  HELP_3_Desc_1:        '**Prima di inviare degli ether al tuo nuovo portafoglio**, dovresti assicurarti di poterci accedere.',
  HELP_3_Desc_2:        'Vai alla pagina "Informazioni portafoglio".',
  HELP_3_Desc_3:        'Vai alla pagina "Informazioni portafoglio" su MyEtherWallet.com.',
  HELP_3_Desc_4:        'Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio.',
  HELP_3_Desc_5:        'Se il portafoglio è crittografato, comparirà automaticamente una casella di testo. Inserisci la password.',
  HELP_3_Desc_6:        'Fai clic sul pulsante "Sblocca".',
  HELP_3_Desc_7:        'Dovrebbero comparire le informazioni sul tuo portafoglio. Individua l\'indirizzo del tuo conto, accanto all\'icona rotonda e colorata. Questa icona rappresenta visivamente il tuo indirizzo. Assicurati che l\'indirizzo sia quello che hai salvato nel tuo file di testo e che sia presente sul tuo portafoglio cartaceo.',
  HELP_3_Desc_8:        'Se stai pensando di conservare una grande quantità di ether, ti consigliamo di provare a inviare una piccola somma di ether dal nuovo portafoglio prima di depositarci un grosso importo. Invia 0,001 ether al nuovo portafoglio, accedici, e invia quegli 0,001 ether a un altro indirizzo, e assicurati che tutto funzioni agevolmente.',

  HELP_4_Title:         '4) Come invio degli ether da un portafoglio a un altro?',
  HELP_4_Desc_1:        'Se stai pensando di spostare una grande quantità di ether, dovresti prima provare ad inviare una piccola somma al tuo portafoglio per assicurarti che tutto vada come previsto.',
  HELP_4_Desc_2:        'Vai alla pagina "Invia ether".',
  HELP_4_Desc_3:        'Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio.',
  HELP_4_Desc_4:        'Se il portafoglio è crittografato, comparirà automaticamente una casella di testo. Inserisci la password.',
  HELP_4_Desc_5:        'Fai clic sul pulsante "Sblocca".',
  HELP_4_Desc_6:        'Inserisci l\'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:".',
  HELP_4_Desc_7:        'Inserisci l\'importo che vuoi inviare. Puoi anche fare clic sul link "Invia l\'intero saldo" se desideri trasferire l\'intero saldo.',
  HELP_4_Desc_8:        'Nota: A partire dalla fine di giugno 2016 dovrai assicurarti di separare i tuoi ETH/ETC prima di inviare ether come avresti fatto normalmente. Vedi la domanda n. 6 qui sotto per ulteriori informazioni.',
  HELP_4_Desc_9:        'Fai clic su "Genera transazione".',
  HELP_4_Desc_10:       'Compariranno un paio di ulteriori campi. È perché il tuo browser ha generato la transazione.',
  HELP_4_Desc_11:       'Fai clic sul pulsante azzurro "Invia transazione" in basso.',
  HELP_4_Desc_12:       'Comparirà un pop-up. Verifica che l\'importo e l\'indirizzo a cui stai inviando siano corretti. Quindi fai clic sul pulsante "Sì, sono sicuro! Esegui la transazione.".',
  HELP_4_Desc_13:       'La transazione verrà inviata. Verrà mostrato l\'ID della transazione (*TX ID*). Puoi fare clic sul TX ID per vederla sulla *blockchain*. ',

  HELP_4CX_Title:       '4) Come invio degli ether utilizzando MyEtherWallet CX?',
  HELP_4CX_Desc_1:      'Innanzitutto devi aggiungere un portafoglio. Dopo averlo fatto hai 2 opzioni: la funzionalità "Invio rapido" dall\'icona dell\'estensione di Chrome o la pagina "Invia ether".',
  HELP_4CX_Desc_2:      'Invio rapido:',
  HELP_4CX_Desc_3:      'Fai clic sull\'icona dell\'estensione di Chrome.',
  HELP_4CX_Desc_4:      'Fai clic sul pulsante "Invio rapido".',
  HELP_4CX_Desc_5:      'Seleziona il portafoglio dal quale desideri inviare.',
  HELP_4CX_Desc_6:      'Inserisci l\'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:".',
  HELP_4CX_Desc_7:      'Inserisci l\'importo che vuoi inviare. Puoi anche fare clic sul link "Invia l\'intero saldo" se desideri trasferire l\'intero saldo.',
  HELP_4CX_Desc_8:      'Fai clic su "Invia transazione". ',
  HELP_4CX_Desc_9:      'Verifica che l\'importo e l\'indirizzo a cui stai inviando siano corretti.',
  HELP_4CX_Desc_10:     'Inserisci la password del portafoglio.',
  HELP_4CX_Desc_11:     'Fai clic su "Invia transazione."',
  HELP_4CX_Desc_12:     'Tramite la pagina "Invia ether": ',

  HELP_5_Title:         '5) Come faccio ad eseguire MyEtherWallet.com offline/in locale? ',
  HELP_5_Desc_1:        'Puoi eseguire MyEtherWallet.com sul tuo computer invece che dai server di GitHub. Puoi generare un portafoglio completamente offline e inviare transazioni dalla pagina "Invia Offline".',
  HELP_5_Desc_2:        'Vai sul nostro github: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages).',
  HELP_5_Desc_3:        'Fai clic su "download zip" in alto a destra.',
  HELP_5_Desc_4:        'Sposta il file zip su un computer *air-gapped*.',
  HELP_5_Desc_5:        'Decomprimi il file.',
  HELP_5_Desc_6:        'Fai doppio clic su `index.html`.',
  HELP_5_Desc_7:        'MyEtherWallet.com è ora in esecuzione completamente sul tuo computer.',
  HELP_5_Desc_8:        'In caso tu non abbia molta confidenza, ti serve l\'intera cartella per poter eseguire il sito web, non solo `index.html`. Non toccare né spostare nulla del contenuto della cartella. Se stai conservando un backup del repository MyEtherWallet per il futuro, ti consigliamo di conservare soltanto il file ZIP in modo da assicurarti che i contenuti della cartella rimangano intatti.',
  HELP_5_Desc_9:        'Dal momento che stiamo costantemente aggiornando MyEtherWallet.com, ti consigliamo di aggiornare periodicamente la tua versione locale del repository.',

  HELP_5CX_Title:       '5) Come posso installare questa estensione dal repository invece che dal Chrome Store? ',
  HELP_5CX_Desc_1:      'Vai sul nostro github e individua la release più recente dell\'estensione di Chrome: [https://github.com/kvhnuke/etherwallet/tree/mercury/chrome-extension-releases](https://github.com/kvhnuke/etherwallet/tree/mercury/chrome-extension-releases).',
  HELP_5CX_Desc_2:      'Scorri alla fine della pagina e fai clic destro sull\'ultima release. Fai clic su "Salva link con nome".',
  HELP_5CX_Desc_3:      'In Google Chrome, fai clic su Impostazioni (dal menu in alto a destra).',
  HELP_5CX_Desc_4:      'Fai clic su "Estensioni" sulla sinistra.',
  HELP_5CX_Desc_5:      'Seleziona la casella "Modalità sviluppatore" all\'inizio della pagina.',
  HELP_5CX_Desc_6:      'Fai clic sul pulsante "Carica estensione non pacchettizzata...".',
  HELP_5CX_Desc_7:      'Vai alla cartella che hai precedentemente scaricato e decompresso. Fai clic su "Seleziona".',
  HELP_5CX_Desc_8:      'L\'estensione dovrebbe ora comparire fra le tue estensioni e nella barra delle estensioni di Chrome.',

  HELP_6_Title:         '6) Come faccio a separare i miei ETH / ETC? ',
  HELP_6_Desc_1:        'Come conseguenza della *hard fork*, a qualunque quantità di ETH precedentemente presente nel tuo portafoglio corrisponde ora una uguale quantità di ETC. Se invii degli ETH tramite una transazione standard, verranno anche inviati degli ETC. Per evitarlo, devi "separare" il tuo portafoglio originale in due portafogli. Dopodiché, ti devi assicurare che solamente gli ETH finiscano nel tuo portafoglio ETH e solamente gli ETC finiscano nel tuo portafoglio ETC.',
  HELP_6_Desc_2:        'Puoi anche inviare tutti i tuoi ETH & ETC utilizzando una transazione standard a Kraken o Poloniex. Queste piattaforme di scambio separeranno automaticamente i tuoi ETH ed ETC. Potrai quindi spostare questi fondi in nuovi portafogli, o vendere i tuoi ETC o ETH.',
  HELP_6_Desc_3:        '[Qui puoi trovare ulteriori informazioni su portafogli e *reply attack*](https://steemit.com/ethereum/@ktmgen/eli5-understanding-wallets-in-eth-and-etc-a-comment-from-reddit).',
  HELP_6_Desc_4:        'Genera un nuovo portafoglio ETH *post-fork* pulito per te (che sarà la destinazione finale degli ETH e nient\'altro).',
  HELP_6_Desc_5:        'Genera un nuovo portafoglio ETC *post-fork* pulito per te (che sarà la destinazione finale degli ETC e nient\'altro).',
  HELP_6_Desc_6:        'Fai un backup di questi nuovi portafogli e verifica di poterci accedere. Vedi domande n. 2a e n. 3 qui sopra.',
  HELP_6_Desc_7:        'Invia 0,1234 ETH al nuovo portafoglio "ETH" utilizzando l\'opzione "Solo ETH" nella pagina "Invia ether".',
  HELP_6_Desc_8:        'Invia 0,5678 ETC al nuovo portafoglio "ETC" utilizzando l\'opzione "Solo ETC" nella pagina "Invia ether".',
  HELP_6_Desc_9:        'Controlla che si siano spostati solamente gli 0,1234 ETH su etherscan.io. Controlla che si siano spostati solamente gli 0,5678 ETC su gastracker.io.',
  HELP_6_Desc_10:       'Esegui una transazione di 0,0001 ETH dal tuo nuovo portafoglio ETH. Controlla etherscan.io. Assicurati che gli 0,0001 ETH siano stati inviati.',
  HELP_6_Desc_11:       'Genera (ma non inviare) una transazione di 0,0002 ETC dal tuo nuovo portafoglio ETC. Copia il campo "Transazione firmata". ',
  HELP_6_Desc_12:       'Vai su [classicetherwallet.com](http://classicetherwallet.com/#offline-transaction) e incolla la transazione ETC nella scheda "Invia offline" di classicetherwallet.com, alla fine della pagina, e invia. Controlla gastracker.io. Assicurati che gli 0,0002 ETC siano stati inviati.',
  HELP_6_Desc_13:       'Se tutto è stato ricevuto ed inviato correttamente allora sei a posto.',
  HELP_6_Desc_14:       'Invia tutto il saldo ETH rimanente utilizzando l\'opzione "Solo ETH" e ripeti per il saldo ETC utilizzando "Solo ETC".',
  HELP_6_Desc_15:       'Adesso puoi usare le transazioni standard per questi nuovi portafogli senza rischio di *replay attack*. ',

  HELP_7_Title:         '7) Come invio token e come aggiungo token personalizzati?',
  HELP_7_Desc_0:        '[Ethplorer.io](https://ethplorer.io/) è un ottimo modo di esplorare i token e trovarne i decimali.',
  HELP_7_Desc_1:        'Vai alla pagina "Invia token".',
  HELP_7_Desc_2:        'Sblocca il portafoglio.',
  HELP_7_Desc_3:        'Inserisci l\'indirizzo al quale vuoi inviare nel campo "Indirizzo destinatario:".',
  HELP_7_Desc_4:        'Inserisci l\'importo che vuoi inviare.',
  HELP_7_Desc_5:        'Seleziona il token che vuoi inviare.',
  HELP_7_Desc_6:        'Se non vedi il token nell\'elenco:',
  HELP_7_Desc_7:        'Fai clic su "Altro".',
  HELP_7_Desc_8:        'Inserisci l\'indirizzo, il nome, e i decimali del token. Questi valori sono forniti dagli sviluppatori del token e sono necessari anche quando aggiungi il token in Mist per osservarlo.',
  HELP_7_Desc_9:        'Fai clic su "Salva".',
  HELP_7_Desc_10:       'Ora puoi inviare il token e anche vederne il saldo nella barra laterale.',
  HELP_7_Desc_11:       'Fai clic su "Genera transazione".',
  HELP_7_Desc_12:       'Compariranno un paio di ulteriori campi. È perché il tuo browser ha generato la transazione.',
  HELP_7_Desc_13:       'Fai clic sul pulsante azzurro "Invia transazione" in basso.',
  HELP_7_Desc_14:       'Comparirà un pop-up. Verifica che l\'importo e l\'indirizzo a cui stai inviando siano corretti. Quindi fai clic sul pulsante "Sì, sono sicuro! Esegui la transazione.".',
  HELP_7_Desc_15:       'La transazione verrà inviata. Verrà mostrato l\'ID della transazione (*TX ID*). Puoi fare clic sul TX ID per vederla sulla *blockchain*.',

  HELP_8_Title:         '8) Che succede se il vostro sito va giù?',
  HELP_8_Desc_1:        'MyEtherWallet non è un portafoglio web. Non hai un login e niente viene mai salvato nei nostri server. È semplicemente un\'interfaccia che ti consente di interagire con la *blockchain*.',
  HELP_8_Desc_2:        'Se MyEtherWallet.com va giù, dovrai trovare un altro modo (come geth o Ethereum Wallet / Mist) per fare quello che facciamo noi. Ma non dovrai "tirare fuori" i tuoi ether da MyEtherWallet perché non si trovano in MyEtherWallet. Sono in qualunque portafoglio tu abbia generato tramite il nostro sito.',
  HELP_8_Desc_3:        'Ora puoi importare direttamente e molto facilmente in geth / Ethereum Wallet / Mist la tua chiave privata non crittografata e i tuoi file in formato Geth/Mist (crittografati). Vedi la domanda n. 12 qui sotto.',
  HELP_8_Desc_4:        'Inoltre, la probabilità che tiriamo giù MyEtherWallet è prossima allo zero. Non ci costa praticamente nulla mantenerlo dal momento che non stiamo memorizzando alcuna informazione. Se anche disattivassimo il dominio, è ancora, e sarà sempre, disponibile pubblicamente su [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Puoi scaricare lo ZIP da lì ed eseguirlo in locale. ',

  HELP_8CX_Title:        '8) Che succede se MyEtherWallet CX sparisce?',
  HELP_8CX_Desc_1:       'Innanzitutto, tutti i dati sono salvati sul tuo computer, non sui nostri server. So che può essere disorientante, ma quando utilizzi l\'estensione Chrome NON stai guardando qualcosa che è salvato da qualche parte sui nostri server - è tutto salvato sul tuo computer.',
  HELP_8CX_Desc_2:       'Detto ciò, è **molto importante** che tu faccia un backup di tutte le informazioni relative a ogni nuovo portafoglio generato con MyEtherWallet CX. In questo modo se succede qualcosa a MyEtherWallet CX or al tuo computer avrai ancora tutte le informazioni necessarie ad accedere ai tuoi ether. Vedi la domanda n. 2a per come salvare i tuoi portafogli.',
  HELP_8CX_Desc_3:       'Se per qualche ragione MyEtherWallet CX sparisce dal Chrome Store, puoi trovare i sorgenti su Github e caricare l\'estensione manualmente. Vedi la domanda n. 5 qui sopra.',

  HELP_9_Title:          '9) La pagina "Invia ether" è offline?',
  HELP_9_Desc_1:         ' No, la pagina in cui si invia la transazione non è offline. Ha bisogno di Internet per poter ottenere il prezzo corrente del gas, il *nonce* del tuo conto, e per trasmettere la transazione (cioè per inviarla). Tuttavia, si limita ad inviare la transazione firmata. La tua chiave privata rimane al sicuro con te. Ora abbiamo inserito anche una pagina "Invia offline" così che ti possa assicurare che le tue chiavi private rimangano sempre su un computer offline/*air-gapped*.',

  HELP_10_Title:         '10) Come creo una transazione offline?',
  HELP_10_Desc_1:        'Vai alla pagina "Invia offline" con il tuo computer online.',
  HELP_10_Desc_2:        'Inserisci l\'"Indirizzo mittente". Ti preghiamo di notare che questo è l\'indirizzo MITTENTE, non l\'indirizzo DESTINATARIO. Da questo indirizzo si genera il *nonce* e il prezzo del gas.',
  HELP_10_Desc_3:        'Spostati sul tuo computer offline. Inserisci l\'"INDIRIZZO DESTINATARIO" e l\'"IMPORTO" che desideri inviare.',
  HELP_10_Desc_4:        'Inserisci il "PREZZO GAS" così come visualizzato sul tuo computer online nel passo n. 1.',
  HELP_10_Desc_5:        'Inserisci il "NONCE" così come visualizzato sul tuo computer online nel passo n. 1.',
  HELP_10_Desc_6:        'Il "LIMITE GAS" ha un valore predefinito di 21000. Questo valore è sufficiente per una transazione standard. Se desideri inviare ad un contratto o se includi nella transazione dati aggiuntivi avrai bisogno di aumentare il limite gas. Eventuale gas in eccesso ti sarà restituito.',
  HELP_10_Desc_7:        'Se lo desideri, inserisci dei dati. Se lo fai, dovrai aumentare il limite gas a un valore superiore al limite predefinito di 21000. Tutti i dati sono in formato HEX.',
  HELP_10_Desc_8:        'Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio.',
  HELP_10_Desc_9:        'Premi il pulsante "GENERA TRANSAZIONE".',
  HELP_10_Desc_10:       'I campi sotto il pulsante saranno riempiti con la transazione firmata. Copiala e ritorna al tuo computer online. ',
  HELP_10_Desc_11:       'Sul tuo computer online, incolla la transazione firmata nel campo di testo nel passo n. 3 e fai clic su "Invia transazione". In questo modo la transazione verrà trasmessa.',

  HELP_11_Title:          '11) Come faccio a inviare a un contratto?',
  HELP_11_Desc_1:         'Inviare a un contratto richiede spesso l\'aggiunta di dati o di ulteriore gas o di entrambi',
  HELP_11_Desc_2:         'Vai alla pagina "Invia ether". ',
  HELP_11_Desc_3:         'Seleziona il file del tuo portafoglio -oppure- la tua chiave privata e sblocca il portafoglio. ',
  HELP_11_Desc_4:         'Inserisci un "Indirizzo destinatario" e un "Importo da inviare"',
  HELP_11_Desc_5:         'Fai clic sul pulsante "+Avanzate: aggiungi più gas o dei dati" sotto al campo dell\'importo. Verranno mostrati due ulteriori campi che puoi utilizzare per aumentare il gas sopra al valore predefinito di 21000, o per aggiungere dati alla transazione.',

  HELP_12_Title:          '12) Come faccio a importare un portafoglio creato con MyEtherWallet in geth / Ethereum Wallet / Mist?',
  HELP_12_Desc_1:         'Con un file JSON Geth/Mist generato da MyEtherWallet v2+....',
  HELP_12_Desc_2:         'Vai alla pagina "Informazioni portafoglio".',
  HELP_12_Desc_3:         'Sblocca il portafoglio usando la tua chiave privata **crittografata** o il file JSON. ',
  HELP_12_Desc_4:         'Vai alla pagina "I miei portafogli".',
  HELP_12_Desc_5:         'Seleziona il portafoglio che vuoi importare in Mist, fai clic sull\'icona "Mostra", inserisci la password, e accedi al portafoglio. ',
  HELP_12_Desc_6:         'Individua la sezione "File Keystore/JSON (Consigliato · Crittografato · Formato Mist/Geth)". Premi il pulsante "Download" al di sotto. Ora hai il file keystore.',
  HELP_12_Desc_7:         'Apri l\'applicazione Ethereum Wallet. ',
  HELP_12_Desc_8:         'Nella barra dei menu, vai su "Accounts" -> "Backup" -> "Accounts"',
  HELP_12_Desc_9:         'Si aprirà la tua cartella keystore. Copia il file che hai appena scaricato (`UTC--2016-04-14........`) dentro questa cartella.',
  HELP_12_Desc_10:        'Il tuo conto dovrebbe comparire immediatamente sotto "Accounts."',
  HELP_12_Desc_11:        'Con una chiave privata non crittografata...',
  HELP_12_Desc_12:        'Se non hai già la chiave private non crittografata, vai alla pagina "Informazioni portafoglio".',
  HELP_12_Desc_13:        'Seleziona il file del tuo portafoglio -oppure- inserisci/incolla la tua chiave privata per sbloccare il portafoglio.',
  HELP_12_Desc_14:        'Copia la tua chiave privata (non crittografata).',
  HELP_12_Desc_15:        'Se sei su un Mac:',
  HELP_12_Desc_15b:       'Se sei su un PC:',
  HELP_12_Desc_16:        'Apri TextEdit e incolla la chiave privata.',
  HELP_12_Desc_17:        'Vai sulla barra dei menu e fai clic su "Formato" -> "Converti in formato Solo testo".',
  HELP_12_Desc_18:        'Salva questo file sulla tua `Scrivania` come `niente_di_speciale_cancellami.txt`. Assicurati che siano selezionati "UTF-8" e "Se non è indicata nessuna estensione, usa .”txt”" nella finestra di salvataggio.',
  HELP_12_Desc_19:        'Apri il terminale ed esegui il seguente comando: `geth account import ~/Desktop/niente_di_speciale_cancellami.txt`',
  HELP_12_Desc_20:        'Ti verrà chiesto di creare una nuova password. È la password che userai in geth / Ethereum Wallet / Mist ogni volta che invierai una transazione, quindi non dimenticarla. ',
  HELP_12_Desc_21:        'A importazione conclusa positivamente, cancella `niente_di_speciale_cancellami.txt`',
  HELP_12_Desc_22:        'Alla prossima apertura dell\'applicazione Ethereum Wallet, il tuo conto sarà mostrato sotto "Accounts".',
  HELP_12_Desc_23:        'Apri Blocco note e incolla la chiave privata',
  HELP_12_Desc_24:        'Salva il file come `niente_di_speciale_cancellami.txt` in `C:\\`',
  HELP_12_Desc_25:        'Esegui il comando `geth account import C:\\niente_di_speciale_cancellami.txt`',
  HELP_12_Desc_26:        'Ti verrà chiesto di creare una nuova password. È la password che userai in geth / Ethereum Wallet / Mist ogni volta che invierai una transazione, quindi non dimenticarla.',
  HELP_12_Desc_27:        'A importazione conclusa positivamente, cancella `niente_di_speciale_cancellami.txt`',
  HELP_12_Desc_28:        'Alla prossima apertura dell\'applicazione Ethereum Wallet, il tuo conto sarà mostrato sotto "Accounts". ',

  HELP_13_Title:          '13) Cosa significa "Limite gas troppo basso"?',
  HELP_13_Desc_1:         'Molto probabilmente significa che stai tentando di inviare ether a un contratto. Inviare a un contratto richiede un po\' più di dati e quindi un po\' più di gas. Sulla pagina "Invia ether", fai clic sul pulsante "+Avanzate: aggiungi più gas o dei dati" sotto al campo dell\'importo. Compariranno due ulteriori campi che puoi utilizzare per aumentare il gas sopra al valore predefinito di 21000, o per aggiungere dati alla transazione.',

  HELP_14_Title:          '14) Certi siti inizializzano il generatore di numeri casuali per la generazione della chiave privata tramite i movimenti del mouse. MyEtherWallet.com non lo fa. La generazione di numeri casuali di MyEtherWallet è sicura?',
  HELP_14_Desc_1:         'Sebbene usare i movimenti del mouse sia ingegnoso, e comprendiamo perché piaccia, la realtà è che window.crypto assicura maggiore entropia rispetto ai tuoi movimenti del mouse. Non che i movimenti del mouse siano insicuri, è solo che noi (e un sacco di altri critto-esperimenti) crediamo in window.crypto. Oltretutto, MyEtherWallet.com può essere utilizzato su dispositivi touch. Qui c\'è una [conversazione fra un utente di reddit arrabbiato e Vitalik Buterin su movimenti del mouse contro window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) e qui c\'è [la specifica del w3 di window.crypto](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).',

  HELP_15_Title:          '15) Perché il conto che ho appena creato non risulta nello strumento per esplorare la *blockchain*? (es: etherchain, etherscan)',
  HELP_15_Desc_1:         'I conti vengono mostrati in quegli strumenti solamente dopo che c\'è stata un\'attività sul conto in questione&mdash;ad esempio, dopo che ci hai trasferito degli ether.',

  HELP_16_Title:          '16) Come faccio a controllare il saldo del mio conto? ',
  HELP_16_Desc_1:         'Puoi usare uno strumento per l\'esplorazione della *blockchain* come [etherscan.io](http://etherscan.io/). Incolla il tuo indirizzo nella barra di ricerca e vedrai il tuo indirizzo e lo storico delle transazioni. Ad esempio, questo è come si presenta il nostro [conto donazioni](http://etherscan.io/address/0x1234567890abcdef1234567890abcdef12345678) su etherscan.io',

  HELP_17_Title:          '17) Perché non viene mostrato il saldo quando sblocco il mio portafoglio? ',
  HELP_17_Desc_1:         ' Probabilmente perché sei dietro a un firewall. Le API che utilizziamo per ottenere il saldo e convertirlo sono spesso bloccate dai firewall per qualche ragione. Sarai ancora in grado di inviare transazioni, dovrai solo usare un metodo diverso per vedere il tuo saldo, come etherscan.io',

  HELP_18_Title:          '18) Dov\'è il mio file portafoglio di geth?',

  HELP_19_Title:          '19) Dov\'è il mio file portafoglio di Mist? ',
  HELP_19_Desc_1:         'I file di Mist si trovano di solito nelle posizioni qui sopra, ma è molto più facile aprire Mist, selezionare "Accounts" nella barra dei menu, selezionare "Backup", e selezionare "Accounts". Si aprirà la cartella in cui sono memorizzati i tuoi file.',

  HELP_20_Title:          '20) Dov\'è il mio file portafoglio della prevendita?',
  HELP_20_Desc_1:         'Dove l\'hai salvato. ;) Ti è anche stato spedito in mail, quindi controllala. Cerca un file chiamato `"ethereum_wallet_backup.json"` e selezionalo. Questo portafoglio sarà crittografato con la password che hai creato durante l\'acquisto della prevendita.',

  HELP_21_Title:          '21) Non basta inserire chiavi private casuali, cercare un saldo, e poi inviarselo al proprio indirizzo? ',
  HELP_21_Desc_1:         'Versione corta: sì, ma trovare un conto con un saldo richiederebbe più tempo dell\'età dell\'universo... quindi no.',
  HELP_21_Desc_2:         'Versione lunga in termini semplici: Ethereum si basa sulla [Crittografia a chiave pubblica](https://it.wikipedia.org/wiki/Crittografia_a_chiave_pubblica), nello specifico [Crittografia a curva ellittica](https://eprint.iacr.org/2013/734.pdf) (ECC) che è ampiamente utilizzata, non solo in Ethereum. La maggior parte dei server sono protetti tramite ECC. Anche Bitcoin la usa, oltre a SSH e TLS e a un sacco di altra roba. Le chiavi di Ethereum nello specifico sono di 256 bit, che sono più robuste di 128 bit e 192 bit, che sono anch\'esse ampiamente utilizzate e sono tuttora considerate sicure dagli esperti.',
  HELP_21_Desc_3:         'In tutto ciò tu hai una chiave privata e una chiave pubblica. Dalla chiave privata si può derivare la chiave pubblica, ma dalla chiave pubblica non si può risalire alla chiave privata. Il fatto che Internet e i segreti del mondo usino questa crittografia significa che se ci fosse un modo per ottenere una chiave privata da una chiave pubblica, i tuoi ether persi sarebbero l\'ultimo dei problemi.',
  HELP_21_Desc_4:         'Ora, detto ciò, SÌ se qualcun altro ha la tua chiave privata allora può effettivamente inviare ether dal tuo conto. Proprio come se qualcuno ha la password della tua mail può leggere e spedire la tua mail, o se ha la password del tuo conto bancario potrebbe fare dei trasferimenti. Potresti scaricare la versione Keystore della tua chiave privata che è la chiave privata crittografata con una password. È come avere una password che è a sua volta protetta da un\'altra password.',
  HELP_21_Desc_5:         'E SÌ, in teoria potresti semplicemente digitare stringhe di 64 caratteri esadecimali fino a trovarne una che corrisponda. Infatti, persone intelligenti potrebbero scrivere un programma per controllare molto rapidamente chiavi private casuali. Questo procedimento è conosciuto come *"attacco a forza bruta"* o *"mining"* delle chiavi private. Ci hanno pensato molto e a lungo. Con qualche server di altissimo livello potrebbero essere in grado di controllare più di 1 milione di chiavi al secondo. Però nemmeno controllarne così tante al secondo porterebbe all\'accesso in una maniera tale da rendere il costo dell\'utilizzo di quei server vagamente vicino all\'essere proficuo - è più probabile che tu, e i tuoi pronipoti, moriate prima di trovare una corrispondenza.',
  HELP_21_Desc_6:         'Se sai qualcosa di Bitcoin, [questo ti darà un\'idea:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *"Per illustrare quanto ciò sia improbabile: supponi che ogni satoshi di ogni bitcoin che sarà mai generato sia inviato a una sua chiave privata unica. La probabilità che fra queste chiavi ce ne possano essere due che corrispondano allo stesso indirizzo è circa di uno in 100 trilioni"*.',
  HELP_21_Desc_7:         '[Se preferisci qualcosa di un po\' più tecnico:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *"Questi numeri non hanno niente a che fare con la tecnologia dei dispositivi; sono i massimi che la termodinamica consente. E implicano fortemente che gli attacchi a forza bruta contro le chiavi a 256 bit saranno impraticabili almeno fino a quando i computer non saranno costruiti con qualcosa di diverso dalla materia e non occuperanno qualcosa di diverso dallo spazio."*',
  HELP_21_Desc_8:         'Certo, tutto ciò assume che le chiavi siano generate in una maniera veramente casuale e con sufficiente entropia. Le chiavi generate qui soddisfano questi criteri, come anche Jaxx e Mist/geth. I portafogli Ethereum sono tutti piuttosto buoni. Le chiavi generate dai *brainwallet* non lo sono, dal momento che il cervello di una persona non è capace di creare un seme veramente casuale. Ci sono stati un numero di altri problemi relativi alla mancanza di entropia o a semi non generati in maniera veramente casuale nel mondo di Bitcoin, ma quella è un\'altra questione di cui non parleremo oggi.',

  HELP_SecCX_Title:       'Sicurezza - MyEtherWallet CX ',
  HELP_SecCX_Desc_1:      'Dov\'è che questa estensione salva le mie informazioni?',
  HELP_SecCX_Desc_2:      'Le informazioni che memorizzi in questa estensione di Chrome sono salvate tramite [chrome.storage](http://chrome.storage/). - è lo stesso posto in cui vengono salvate le tue password quando le salvi in Chrome.',
  HELP_SecCX_Desc_3:      'Che informazioni sono salvate? ',
  HELP_SecCX_Desc_4:      'L\'indirizzo, nome, e la chiave privata sono memorizzati in chrome.storage. La chiave privata è crittografata utilizzando la password che hai impostato quando hai aggiunto il portafoglio. Il nome e l\'indirizzo del portafoglio non sono crittografati.',
  HELP_SecCX_Desc_5:      'Perché il nome e l\'indirizzo del portafoglio non sono crittografati? ',
  HELP_SecCX_Desc_6:      'Se crittografassimo questi elementi dovresti inserire una password ogni volta in cui volessi vedere il saldo del tuo conto o i nomi dei portafogli. Se ciò ti preoccupa, ti consigliamo di usare MyEtherWallet.com invece di questa estensione di Chrome.',

  HELP_Sec_Title:         'Sicurezza',
  HELP_Sec_Desc_1:        'Se una delle prime domande che ti poni è "Perché dovrei fidarmi di questa gente?", è una cosa buona. Quanto segue dovrebbe aiutarti a calmare i tuoi timori. ',
  HELP_Sec_Desc_2:        'Siamo attivi da agosto 2015. Se cerchi ["myetherwallet" su reddit](https://www.reddit.com/search?q=myetherwallet), puoi vedere che molte persone ci utilizzano con grande successo.',
  HELP_Sec_Desc_3:        'Non prenderemo i tuoi soldi né ruberemo le tue chiavi private. Non c\'è codice malevolo su questo sito. Infatti le pagine "Genera portafoglio" sono completamente lato client. Ciò significa che tutto il codice è eseguito sul ** tuo computer** e non viene mai salvato e trasmesso da nessuna parte.',
  HELP_Sec_Desc_4:        'Controlla l\'URL -- Questo sito viene servito attraverso GitHub e puoi vederne il codice sorgente qui: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) sui domini: [http://kvhnuke.github.io/etherwallet/](http://kvhnuke.github.io/etherwallet) e [https://www.myetherwallet.com](https://www.myetherwallet.com). Puoi verificare che sia ospitato su GitHub utilizzando [viewdns.info/dnsrecord/?domain=myetherwallet.com](http://viewdns.info/dnsrecord/?domain=myetherwallet.com") - gli IP degli ultimi due record A sono posseduti da GitHub per il loro hosting dei domini personalizzati.',
  HELP_Sec_Desc_5:        'Per la generazione dei portafogli, puoi scaricare il [codice sorgente](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Vedi la domanda 5 qui sopra.',
  HELP_Sec_Desc_6:        'Fai una prova e controlla che attività di rete sono in corso. Il modo più facile e fare clic destro sulla pagina e scegliere "Analizza elemento". Vai sulla scheda "Rete". Genera un portafoglio di prova. Vedrai che non c\'è attività di rete. Potresti vedere accadere qualcosa che assomiglia a  data:image/gif e data:image/png. Sono i QR code che vengono generati...sul tuo computer...dal tuo computer. Non sono stati trasferiti byte.',
  HELP_Sec_Desc_7:        'Ora, per essere sicuro, vai alla scheda "Archiviazione". Qui puoi vedere tutti i diversi elementi che costituiscono un sito web. Se controlli Archiviazione locale, Cookie, e Archiviazione cache, vedrai che non c\'è nulla che viene memorizzato. Non viene salvato niente. Se ricarichi la pagina ricominci da capo.',
  HELP_Sec_Desc_8:        'Se non ti senti a tuo agio a usare questo strumento, allora certo, non usarlo. Abbiamo creato questo strumento per aiutare la gente a generare portafogli ed eseguire transazioni senza bisogno di usare la riga di comando o far girare un nodo completo. Di nuovo, sentiti libero di contattarci se hai dubbi e ti risponderemo appena possibile. Grazie! ',

  HELP_FAQ_Title:         'Risposte più utili alle domande frequenti (in Inglese)',
  HELP_Contact_Title:     'Modi per contattarci (in Inglese)'
};

module.exports = it;

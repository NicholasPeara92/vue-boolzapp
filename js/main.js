'use strict'


const { createApp } = Vue

createApp({
    data() {
            return {
                chuck:[],
                currentDate: '',
                searchName: '',
                newMessage: null,
                contactId: 0,
                contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        changeContact(index) {
			this.contactId = index;
		},
        // metodo di ricerca contatto
        searchContact() {
            if (this.searchName === ''){
                for(let i=0; i<this.contacts.length; i++) {
                    this.contacts[i].visible = true;
                }
            } else {
                for(let i=0; i<this.contacts.length; i++){
                    if(!this.contacts[i].name.toLowerCase().includes(this.searchName.toLowerCase())) {
                        this.contacts[i].visible = false;   
                    }
                }
            }
        },
        // metodo per cancellare le lettere dalla searchbar dei contatti ed adattare i risultati
        deLetter() {
            if(this.searchName !== '') {
                for(let i = 0; i < this.contacts.length; i++) {
                    if(this.contacts[i].name.toLowerCase().includes(this.searchName.toLowerCase())) {
                        this.contacts[i].visible = true;
                    }
                }
            }
        },
        // metodo per inviare nuovi messaggi nelle chat
        sendMessage() {
            if (this.newMessage !== null) {
                const sentMessage = {
                    date: this.currentDate,
                    message: this.newMessage,
                    status: 'sent',
                };
                this.contacts[this.contactId].messages.push(sentMessage);
                this.newMessage = null;
                this.cpuReply();
            }
        },
        // metodo per aggiungere la replica da parte della cpu
        cpuReply() {
            setTimeout(() => {
                const cpuMessage = {
                    date: this.currentDate,
                    message: this.chuck[this.getRndInteger(0, this.chuck.length - 1)],
                    status: 'received',
                };
                this.contacts[this.contactId].messages.push(cpuMessage);
            }, 1000);
        },
        // metodo per cancellare i messaggi
        deleteMessages(i) {
            this.contacts[this.contactId].messages.splice(i , 1);                      
        },
        // metodo per cambiare formato delle date
        formatMessageData(data) {
            return moment(data, "DD/MM/YYYY hh:mm:ss").fromNow();
        },
        // genera un numero randomico
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
        // metodo che fa seguire la scrollbar all'ultimo messaggio inviato o ricevuto
        scrollBottom() {
            const chat = document.querySelector('.main-chat')
            chat.scrollTop = chat.scrollHeight
        }

    },
    created() {
        moment.locale('it');
        this.currentDate = new Date().toLocaleString();
        for ( let i = 0; i <= 20; i++ ) {
            axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {             
            this.chuck.push(response.data.value);
            })
        }
    },
    updated() {
        this.scrollBottom()
    }
}).mount('#app')
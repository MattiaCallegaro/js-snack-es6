//Snack 1


// creo un array di oggetti

const biciDaCorsa =[
    {
        nome:"Pinnarello",
        peso:6.8,
    },
    {
        nome:"Van Rysel",
        peso:6,
    },
    {
        nome:"E-gravel",
        peso:5.4,
    },
    {
        nome:"Tarmac",
        peso:5,
    }

]

// ciclo per trovare il peso minore
let pesoMin=biciDaCorsa[0].peso;
let biciLeggera =biciDaCorsa[0] ;

for(let i=0; i<biciDaCorsa.length; i++){
    // console.log(biciDaCorsa[i.peso])
    if(biciDaCorsa[i].peso < pesoMin){
       pesoMin = biciDaCorsa[i].peso;
       biciLeggera = biciDaCorsa[i]

    }
}
console.log("Tutte le bici", biciDaCorsa)
console.log(`La  bici più leggera è ${biciLeggera.nome} con un peso di ${pesoMin} kg `)

//Snack 2

// creo un array di oggetti

const squadreDiCalcio =[
    {
        nome:"Milan",
        punti_fatti:0,
        falli_subiti:0
    },
    {
        nome:"Inter",
        punti_fatti:0,
        falli_subiti:0
    },
    {
        nome:"Juventus",
        punti_fatti:0,
        falli_subiti:0
    },
    {
        nome:"Napoli",
        punti_fatti:0,
        falli_subiti:0
    },
]

console.log(squadreDiCalcio)

//genero numeri casuali
const generateRandomNumber = () => {
    return Math.floor(Math.random() *( 15 - 10 + 1)) + 1;
}

// ciclo l'array per far in mododi ottenere numeri casuali per punti e falli
for( let i=0; i<squadreDiCalcio.length; i++){
    squadreDiCalcio[i].punti_fatti = generateRandomNumber();
    squadreDiCalcio[i].falli_subiti = generateRandomNumber();
}

console.log(squadreDiCalcio);

for( let i=0; i<squadreDiCalcio.length; i++){

}

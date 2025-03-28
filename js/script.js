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

for(let i=0; i<biciDaCorsa.length; i++){
    console.log(biciDaCorsa[i.peso])
    if(biciDaCorsa[i].peso<=5){
        console.log(biciDaCorsa[i].nome)
    }
}

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
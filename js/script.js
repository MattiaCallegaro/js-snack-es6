// creo un array obj

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

for(let i=0; i<biciDaCorsa.length; i++){
    console.log(biciDaCorsa[i.peso])
    if(biciDaCorsa[i].peso<=5){
        console.log(biciDaCorsa[i].nome)
    }
}
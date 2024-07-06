const prompt = require('prompt-sync')();

let times = Array('h', 'min', 'sec')
times['h'] = Array()
times['min'] = Array()
times['sec'] = Array()

for(let i = 0; i<1; i++){
    do{
        times['h'][0] = parseInt(prompt('Digite a hora: '))
    }while(times['h'][0]<0 || times['h'][0]>23);

    do{
        times['min'][0] = parseInt(prompt('Digite os minutos: '))
    }while(times['min'][0]<0 || times['min'][0]>59);

    do{
        times['sec'][0] = parseInt(prompt('Digite os segundos: '))
    }while(times['sec'][0]<0 || times['sec'][0]>59)
}


console.log(`${times['h'][0]}:${times['min'][0]}.${times['sec'][0]}`)
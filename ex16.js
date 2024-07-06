let array = []

for(let i=0; i<20; i++){
    array[i] = parseInt(Math.random()*100)
}

console.log(array)

let change = true

while(change){
    change = false

    for(let i = 1; i < array.length; i++){
        if(array[i]<array[i-1]){
            let n = array[i-1]
            array[i-1] = array[i]
            array[i] = n
            change=true
        }
    }
}

console.log(array)
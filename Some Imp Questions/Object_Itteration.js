let car = {
    audi: {
        color: 'black',
        speed: '120kmph'
    },
    BMW: {
        color: 'red',
        speed: '150kmph'
    }
}

for(let [key, value] of Object.entries(car)){
    // console.log(key, value.color)
    console.log(`Car name is ${key} with ${value.color} color and it runs ${value.speed}`)
}

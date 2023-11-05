

// starts execution with chain reaction effect
main()

// function master.
function main() {

    // array manipulated by master constructor function
    let storage = []
    storage.push(calculateBalance())
    storage.push(calculateBalance(10, 10))
    storage.push(calculateBalance(100, 15))
    storage.push(calculateBalance(70, 30))
    storage.push(calculateBalance(520, 17))
    storage.push(calculateBalance(29, 15))
    storage.push(calculateBalance(10, 52))

    // this sentence will be manipulated, where the & symbol is, it will gain a dynamic value
    const defaultMessage = "O herói tem de saldo & está no nível &"

    // 1, 2, 3... & already
    getRank(storage, defaultMessage, "&")
}

// This function is responsible for executing other sub methods and concatenating results and displaying them at the prompt.
function getRank(storage, defaultMessage, splitChar) {
    let count = 0

    while(count < storage.length){
        let firstPartMessageProcessed = defaultMessage.split(splitChar)[0]
        let lastPartMessageProcessed = defaultMessage.split(splitChar)[1]
        
        console.log(`
        ${firstPartMessageProcessed}
         ** ${storage[count]} **
        ${lastPartMessageProcessed}
          ${verifyLevel(storage[count])} 
        `);
        
        count++
    }

}

//This method is calculates hero balance
function calculateBalance(wins=0, losses=0){
    let product = wins - losses
    let result = (product < 0) ? 0 : product
    return result
}

//This method is called when you already have the hero balance
function verifyLevel(score){

    // this constant contains the types of the rankings that should be util for challenge us in this project amazing
    const level = [
        "iron", 
        "bronze", 
        "silver", 
        "gold", 
        "diamond", 
        "legendary", 
        "immortal"
    ]

    if (score < 10){ 
        return level[0]
    } else if (score >= 11 && score < 20){
        return level[1]
    } else if (score >= 21 && score < 50){
        return level[2]
    } else if (score >= 51 && score < 80){
        return level[3]
    } else if (score >= 81 && score < 90){
        return level[4]
    } else if (score >= 91 && score < 100){
        return level[5]
    } else if (score >= 101){
        return level[6]
    }
}

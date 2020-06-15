/////////////// REVERSE INTEGER //////////////////

const reverseInt = (int) => {
    if(Math.sign(int) === 1) {
        intReversed = parseInt(int.toString().split('').reverse().join(""))
    return intReversed
    } else if (Math.sign(int) === 0) {
        intReversed = 0
        return intReversed
    } else if (Math.sign(int) === -1) {
        intReversed = parseInt(int.toString().split('-').join("").split("").reverse().join(""))
        return -intReversed
    }
}

console.log(reverseInt(-150))

/////////////// MAXCHAR //////////////////

let str = "onward to unit four"

const maxChar = (str) => {
    let count = 0
    str.split('').forEach(function(char) {
        if(str.split(char).length > count) {
            count = str.split(char).length;
            theMax = char;
        }
    })  
    return theMax;     
}

console.log(maxChar(str))

function Calculator(){

}


Calculator.prototype.add = function(x, y){
    return x + y ;
}

Calculator.prototype.minus = function(x, y){
    return x - y ;
}
Calculator.prototype.multiple = function(x, y){
    return x * y ;
}
Calculator.prototype.divide = function(x, y){
    if( y === 0){
        return "can't divide with 0"
    }
    else{
    return x / y ;
    }
}
const calci = new Calculator();


console.log(calci.add(4, 7))

console.log(calci.minus(4, 7))

console.log(calci.multiple(4, 7))

console.log(calci.divide(4, 2))

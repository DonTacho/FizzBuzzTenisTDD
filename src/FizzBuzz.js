function FizzBuzz() {
}

FizzBuzz.prototype.divisibleBy = function(numero) {
  if(numero == 3){
	return numero % 3 == 0 ? true : false;
  }else {
  	return numero % 5 == 0 ? true :false;
  }
};

FizzBuzz.prototype.divisibleEntreTres = function(elNumero){
    return elNumero %  3 == 0 ? true : false;
}
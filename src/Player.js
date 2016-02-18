function Player() {
    var pelotas;
}

Player.prototype.getScore = function(){
    if(pelotas == 0){
        return 0;
    }else if (pelotas == 1){
        return 15;
    }else if (pelotas == 2){
        return 30;
    }
};

Player.prototype.setPelotas = function (numero){
    pelotas = 15;
}


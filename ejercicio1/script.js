class Rombo {
    constructor (dimension1, dimension2) {
        this.dimension1 = dimension1;
        this.dimension2 = dimension2;
    }
    // Get -> Crea un Atributo nuevo
    get dimensiones() {
        return "Dimension1: " + this.dimension1 + " Dimension2: " + this.dimension1;
    }
    //Set
    set dimensiones(dimensiones){
        this.dimension1 = dimensiones[0];
        this.dimension2 = dimensiones[1];
    }
    //Otro método
    pintaRombo() {
        var resultado = '';
        var dif = Math.abs(this.dimension1 - this.dimension2);
        for(let i = 0; i < dif/2 + 1; i++) {
            for(let j = 0; j <= dif/2 - i; j++) {
                resultado += ' ';
            }
            for(let j=0; j <= this.dimension1 + i*2; j++) {
                resultado += '*';
            }
            resultado +='\n';
        }
        for(let i = 1; i <= dif/2; i++) {
            for(let j = 0; j <= i; j++) {
                resultado += ' ';
            }
            for(let j=0; j <= this.dimension2 - i*2; j++) {
                resultado += '*';
            }
            resultado +='\n';
        }
        
        console.log(resultado);
    }
}

var rombo = new Rombo(4,6);
rombo.pintaRombo();
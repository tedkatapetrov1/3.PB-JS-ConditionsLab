function areaOfFigures(input){
    let figure = input[0];
    let number = Number(input[1]);
    let number1 = Number(input[2]);

    if(figure === "square") {
        console.log((number * number).toFixed(3));
    }else if(figure === "rectangle"){
        console.log((number * number1).toFixed(3));
    }else if(figure === "circle"){
        console.log((Math.PI * number * number).toFixed(3));
    }else if(figure === "triangle"){
        console.log(((number * number1) / 2).toFixed(3));
    }

}

areaOfFigures(["circle", "6"])


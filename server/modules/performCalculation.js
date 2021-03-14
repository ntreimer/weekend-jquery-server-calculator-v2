let performCalculation = function(object){
    if (object.operation === '+'){
        object.result = (Number(object.input1) + Number(object.input2));
    }
    else if (object.operation === '-'){
        object.result = (Number(object.input1) - Number(object.input2));
    }
    else if (object.operation === '*'){
        object.result = (Number(object.input1) * Number(object.input2));
    }
    else if (object.operation === '/'){
        object.result = (Number(object.input1) / Number(object.input2));
    }
    console.log(object.result);
}// end performCalculation

// export function
module.exports = performCalculation;
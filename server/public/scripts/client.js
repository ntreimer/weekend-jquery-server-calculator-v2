$(document).ready(onReady);

let calculation = {
    input1: '',
    input2: '',
    operation: ''
}

function appendHistoryToDOM(array){
    $('#historyHere').empty();
    for (let i = 0; i < array.length; i++) {
        $('#historyHere').append(`
        <li>${array[i].input1} ${array[i].operation} ${array[i].input2} = ${array[i].result}</li>
        `);
    }//end for
    $('#resultHere').empty();
    $('#resultHere').append(`
    <h2 id="currentResult">${array[array.length - 1].result}</h2>
    `);
}//end appendHistoryToDOM

function calculationToServer(){
    console.log('in calculationToServer');
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: calculation
    }).then(function(response){
        console.log('back from POST:', response);
        displayHistory();
    }).catch(function(err){
        alert('error:', err)
    })//end AJAX
}// end calculationToServer

function clearCalculation(){
    $('#input1').val('');
    $('#input2').val('');
    calculation = {
        input1: '',
        input2: '',
        operation: ''
    }
}// end clearCalculation

function displayHistory(){
    console.log('in displayHistory');
    $.ajax({
        type: 'GET',
        url: '/calculate'
    }).then(function(response){
        console.log('back from GET:', response);
        // append response from server
        appendHistoryToDOM(response);
    }).catch(function(err){
        alert('error:', err)
    })//end AJAX
}// end displayHistory

function onReady(){
    // on page load
    displayHistory();
    // click handlers
    $('#addButton').on('click', updateOperation);
    $('#subtractButton').on('click', updateOperation);
    $('#multiplyButton').on('click', updateOperation);
    $('#divideButton').on('click', updateOperation);
    $('#equalButton').on('click', submitCalculation);
    $('#clearButton').on('click', clearCalculation);
    // dynamically created click handlers
}// end onReady

function updateOperation(){
    // update operation in calculation object
    calculation.operation = $(this).text();
}// end updateOperation

function submitCalculation(){
    // add input information to calculation object
    calculation.input1 = $('#input1').val();
    calculation.input2 = $('#input2').val();
    // if any fields are empty, disallow calculation
    if (calculation.input1 === '' || calculation.input2 === '' || calculation.operation === ''){
        alert('Please complete both input fields and select an operation.')
    }// end if
    else {
        calculationToServer();
        $('#input1').val('');
        $('#input2').val('');
    }
}// end submitCalculation
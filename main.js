console.log('Justin-Thyme');

function printToDom (stringToPrint, divId){
    var thingToPrint = document.getElementById('divID');
    thingToPrint.innerHTML += stringToPrint;
}

printToDom();
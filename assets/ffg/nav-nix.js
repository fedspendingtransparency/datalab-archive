function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

removeElementsByClass('official-banner');
removeElementsByClass('info-banner');

document.getElementById('header').remove(1);
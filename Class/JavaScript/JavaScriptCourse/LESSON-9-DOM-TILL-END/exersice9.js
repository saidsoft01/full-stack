
  
    function showMyname() {
        let inputElement = document.querySelector('.name-input');
        let textValue = inputElement.value
        console.log(textValue)
        document.querySelector('.submit-name').innerHTML = `Your name is: ${textValue}`
    }

    const pressEnter = function(event){
        if(event.key === "Enter") {
            showMyname();
        }
    }
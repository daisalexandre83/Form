let B7Validator = {
    handleSumit:(event) =>{
        event.preventDefault();
        let send = true;
    }
};

let inputs = form.querySelectorAll('input');

for (let i=0; i < inputs.length; index++) {
    let input = inputs[i];
    console.log(input);
     
}

if (send) {
    form.submit();
}

let form = document.querySelector('.b7validator');
form.addEventListener('submit',B7Validator.handleSumit)

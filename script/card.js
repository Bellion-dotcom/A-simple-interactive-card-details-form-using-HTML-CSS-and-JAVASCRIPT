let form = document.getElementById('form')
let number = document.getElementById('num');
let cardName = document.getElementById('name');
let date = document.getElementById('date');
let container = document.getElementById('form-page');
let successIcon = document.createElement('img');
successIcon.src = '../Images/icon-complete.svg';
successIcon.style.width = '50px';
successIcon.style.height = '50px';
let thankYou = document.createElement('h2');  
thankYou.innerText = 'THANK YOU!';  
thankYou.style.textAlign = 'center';
thankYou.style.color = 'black';
thankYou.style.marginTop = '20px';
let message = document.createElement('p');
message.innerText = "We've added your card details";
message.style.textAlign = 'center';
message.style.color = 'grey';
message.style.marginTop = '-15px';
message.style.marginBottom = '20px';
message.style.fontSize = '14px';
let button = document.getElementById('submit');

function numberDisplay() {
        number.innerText = document.getElementById('card-number').value;
}

function nameDisplay() {
        cardName.innerText = document.getElementById('card-name').value;
}

function expiryDisplay() {
        date.innerText = document.getElementById('expiry-month').value + '/' + document.getElementById('expiry-year').value;
}

form.addEventListener('submit',
    async (submission) => {
      try {
        submission.preventDefault();
        let name = document.getElementById('card-name').value;
        let cardNumber = document.getElementById('card-number').value;
        let month = document.getElementById('expiry-month').value;
        let year = document.getElementById('expiry-year').value
        let cvc = document.getElementById('card-cvc').value;
        let span = document.getElementById('required');
        let span1 = document.getElementById('required1');
        let span2 = document.getElementById('required2');
        let span3 = document.getElementById('required3');
        
        // Clear previous error messages
        span.innerHTML = '';
        span1.innerHTML = '';
        span2.innerHTML = '';
        span3.innerHTML = '';
        document.getElementById('card-name').style.border = '1px solid hsl(270, 3%, 87%)';
        document.getElementById('card-number').style.border = '1px solid hsl(270, 3%, 87%)';
        document.getElementById('expiry-month').style.border = '1px solid hsl(270, 3%, 87%)';
        document.getElementById('expiry-year').style.border = '1px solid hsl(270, 3%, 87%)';
        document.getElementById('card-cvc').style.border = '1px solid hsl(270, 3%, 87%)';

        let hasError = false;

        // Name validation
        if(name === '') {
                span.innerHTML = "can't be blank";
                span.style.color = 'red'; 
                span.style.fontSize = '10px';
                document.getElementById('card-name').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        } else if (
         !name.split('').every(char => (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || char === ' ')) {
                span.innerHTML = 'Wrong format, letters only';
                span.style.color = 'red';
                span.style.fontSize = '10px';
                document.getElementById('card-name').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        } 
        
        // Card number validation
        if (cardNumber === '') {
                span1.innerHTML = 'Please enter your card number';
                span1.style.color = 'red'; 
                span1.style.fontSize = '10px';
                document.getElementById('card-number').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        } else if (
                !cardNumber.split('').every(char => (char >= '0' && char <= '9') || char === ' ')
                || !cardNumber.split('').some(char => char === ' ')
        ) {
                span1.innerHTML = 'Wrong format, numbers and spaces only',
                span1.style.color = 'red',
                span1.style.fontSize = '10px'
                document.getElementById('card-number').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        } else if (cardNumber.length < 19 || cardNumber.length > 19) {
                span1.innerHTML = 'Wrong format, 16 numbers only',
                span1.style.color = 'red',
                span1.style.fontSize = '10px'
                document.getElementById('card-number').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        }

        // expiry month validation
        if (month === '') {
                span2.innerHTML = 'can' +"'" + 't be blank',
                span2.style.color = 'red',
                span2.style.fontSize = '10px'
                document.getElementById('expiry-month').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        } else if (month.length > 2) {
                span2.innerHTML = 'Wrong date format',
                span2.style.color = 'red',
                span2.style.fontSize = '10px'
                document.getElementById('expiry-month').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        }

        // expiry year validation
        if (year === '') {
                span2.innerHTML = "can't be blank",
                span2.style.color = 'red',
                span2.style.fontSize = '10px'
                document.getElementById('expiry-year').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        }

        // CVC validation
        if (cvc === '') {
                span3.innerHTML = "can't be blank",
                span3.style.color = 'red',
                span3.style.fontSize = '10px'
                document.getElementById('card-cvc').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        } else if (cvc.length > 3 || cvc.length < 3) {
                span3.innerHTML = 'Wrong format, 3 numbers only',
                span3.style.color = 'red',
                span3.style.fontSize = '10px'
                document.getElementById('card-cvc').style.border = '1px solid hsl(0, 100%, 66%)';
                hasError = true;
        }

        if (hasError) {
            return; 
        }

        form.style.display = 'none';
        // alert('Form submitted successfully!');
        container.appendChild(successIcon);
        container.appendChild(thankYou);
        container.appendChild(message);
        container.appendChild(button);
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
         
        }  catch (error) {
            console.log(error);
            alert('An error occurred while submitting the form. Please try again later.');}
        })


   
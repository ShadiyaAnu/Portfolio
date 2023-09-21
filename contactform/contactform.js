var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var phoneError=document.getElementById('phone-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function nameValidate(){
    var namenew=getElementById('name').value;
    if(namenew.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }if(!namenew.match(/^[A-Za]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'; 
        return false;
    }
    else{
    nameError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
    }
}

function numberValidate(){
    var phone= document.getElementById('number').value;
    if(phone.length != 10){
        phoneError.innerHTML='Invalid input';
        return false;
    }

    if(phone.length == 0){
        phoneError.innerHTML='Invalid input';
        return false;
    }




    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits';
        return false;
    }
    else{
    phoneError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
    }

}

function emailValidate(){
    var email1= document.getElementById('email').value;
    if(email1.length == 0){
        phoneError.innerHTML='Email is required';
        return false;
    }
    if(!email1.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML='Invalid Email id';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;

}

function messageValidate(){
    var message1= document.getElementById('message').value;
    var required=30;
    var left=required - message1.length;
    if(left>0){
        messageError.innerHTML='more charecters required';
        return false;
    }
   
    messageError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;

}

function validateform(){
    if(!nameValidate() || !numberValidate() || !emailValidate() || !messageValidate() )
    {   
        submitError.style.display='block';
        submitError.innerHTML ='Please fix errors to submit';

        setTimeout(function(){submitError.style.display='none'},3000);

        return false;
    }
    else{
    submitError.innerHTML ='Submitted';
    return true;
    }

}





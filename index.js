 function checkPassword(str)
  { 
    let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(str);
  }
  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
    return re.test(String(email).toLowerCase());
}

window.onload= function(){
    const btnSend = document.querySelector('.send-button') //select button send
    const nameInput = document.querySelector('#input-name')
    const lastInput = document.querySelector('#input-last')
    const adressInput = document.querySelector('#input-adress')
    const mailInput = document.querySelector('#input-mail')
    const pwdInput = document.querySelector('#input-pwd')
    const commentInput = document.querySelector('#input-comment')

    btnSend.addEventListener('click', function(){
    if(nameInput.value === "") { alert('First name is empty')}
    else if (lastInput.value === "") { alert('Last name is empty')}
    else if (adressInput.value === "") { alert('adress is empty')}
    else if (mailInput.value === "") { alert('mail is empty')}
    else if (validateEmail(mailInput.value) === false) { alert('mail is not accepted')}
    else if (pwdInput.value === "") { alert('password is empty')}
    else if (checkPassword(pwdInput.value)===false){alert('password is not accepted')}
    else if (commentInput.value === "") { alert('comment is empty')}
    else alert('SEND!')
    })
}











// const inputse=document.querySelectorAll('.inpute')
// const btnsend=document.querySelector('.send-button')
// const  pswd=document.getElementById('input-pwd"')

// btnsend.addEventListener('click',function(){
//     for(let i=0;i<inputse.length;i++){
    
//       if(inputse[i].value==='')
//     {return alert('is empty')  }
 
//   //   else
//   //  {return alert('not pswr') }  
    
//     else {return alert('send')}
//     } 
// })




// pswd.addEventListener('keyup',checkPassword)

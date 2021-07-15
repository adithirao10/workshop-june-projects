document.getElementById('submit').addEventListener('click',function(){
    let name = document.getElementById('email').value;
    let emailaddress = document.getElementById('password').value;

    document.getElementById('email-error').innerText = '';
    document.getElementById('pass-error').innerText = '';
    if(name == '')
    {
        document.getElementById('email-error').innerText = 'Email is required';
    } 
    else( emailaddress == '')
    {
        document.getElementById('pass-error').innerText = 'password is required';
    }
});
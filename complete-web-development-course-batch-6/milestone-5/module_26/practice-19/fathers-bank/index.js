document.getElementById('btn-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    userEmail.value = '';
    userPassword.value = '';
    if (email === 'bank@taka.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Please provide currect email and password')
    }
});
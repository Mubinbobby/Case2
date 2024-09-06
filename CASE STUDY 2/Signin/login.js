
function login(event, callback) {
    event.preventDefault();

    let user = document.getElementById('user').value;
    let pswd = document.getElementById('pswd').value;
    let err1 = document.getElementById('error1');

    if (user === 'admin' && pswd === '12345') {
        err1.textContent = ''; 
        callback(); 
    } else {
        err1.textContent = 'Invalid username or password.';
        err1.style.color ='red';
    }
}

function MainPage() {
    window.location.href = 'http://127.0.0.1:5500/Home/home.html';
}


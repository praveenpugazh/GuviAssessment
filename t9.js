let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome Employee' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);
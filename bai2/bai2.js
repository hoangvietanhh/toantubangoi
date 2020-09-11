let login = prompt('Type');

let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == ' ') ? 'No login' : ' ';

alert(message);
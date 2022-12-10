interface User {
    name : string;
    lastName : string;
    age? : number;
}

let user : User = {
    name  : 'Solomon',
    lastName : 'Danso',
    age : 23
};

let anne : User = {
    name : 'Anne',
    lastName : 'Amoah'
}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('b').innerText = user.name
    document.getElementById('c').innerText = user.lastName
    document.getElementById('d').innerText = anne.name
})
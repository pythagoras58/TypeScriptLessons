interface User {
    name : string;
    lastName : string;
    age? : number;
    gender? : Gender
}

enum Gender {
    MALE='Male',
    FEMALE = 'Female'
}

let user : User = {
    name  : 'Solomon',
    lastName : 'Danso',
    age : 23,
    gender : Gender.MALE
};

let anne : User = {
    name : 'Anne',
    lastName : 'Amoah',
    gender : Gender.FEMALE
}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('b').innerText = user.name
    document.getElementById('c').innerText = user.lastName
    document.getElementById('d').innerText = anne.name
})
var user = {
    name: 'Solomon',
    lastName: 'Danso',
    age: 23
};
var anne = {
    name: 'Anne',
    lastName: 'Amoah'
};
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('b').innerText = user.name;
    document.getElementById('c').innerText = user.lastName;
    document.getElementById('d').innerText = anne.name;
});

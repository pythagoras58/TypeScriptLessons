let course = ['java','c++','node']

course.forEach(items=>{
    console.log(items)
})


function sum(a: number,b:number) {
    return (a+b);
}

console.log(sum(45,56));


let word = 'This is a sentence';

function removeSPace(text: string) {
    return text.split(' ').join('');
}

document.addEventListener("DOMContentLoaded", function (){
    document.getElementById('a').innerText = removeSPace(word);
})

let numbers: number[] = [1,2,3,4,5,6]
let abc:string[] = ['a','b','c'];

numbers.filter((item)=>{
    return item!==2;
})




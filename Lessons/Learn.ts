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
    return text.split(' ').join();
}

document.getElementById('a').innerText = removeSPace(word);


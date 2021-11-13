let vowels = [];
let pattern = /[a,e,i,o,u]/gi;


const app = document.getElementById('app');
const newWord = document.getElementById('new-word');
const btnTxt = document.getElementById('btn-txt');

btnTxt.addEventListener('click', getWord);

function getWord()
{
    if (newWord != '') {
    newWord.value.match(pattern);

    let result = newWord.value.match(pattern) 

    document.getElementById('result').innerHTML = result;
    }
}

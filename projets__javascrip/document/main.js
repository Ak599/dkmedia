let paragraphs = document.querySelectorAll("p");
console.log(paragraphs)
let header = document.querySelectorAll("h1");
console.log(header)
function res()
{
    let res= document.getElementById('Id1')
    console.log(res.innerHTML)
    res.innerHTML = '<h1>ADJA_PENDA_AMINATA_AW_KAMARA</h1>';
    console.log(res.innerHTML)
 res.style.backgroundColor = 'red';
 console.log(res.style.backgroundColor)
}
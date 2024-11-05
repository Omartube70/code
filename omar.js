
let name = document.getElementById('name')
let prise = document.getElementById('prise')
let texes = document.getElementById('texes')
let ads = document.getElementById('ads')
let total = document.getElementById('total')
let cetgory = document.getElementById('cetgory')
let count = document.getElementById('count')
let Create = document.getElementById('Create')

let datePro;
if(localStorage.date != null){
    datePro = JSON.parse(localStorage.date)
}
else{
    datePro = [];
}
let dal = document.getElementById('dalateall')




Create.onclick = function(){
 let x = {
    name:name.value,
    prise:prise.value,
    texes:texes.value,
    ads:ads.value,
    cetgory:cetgory.value
 }
 if(name.value != '' && prise.value !=''){
    datePro.push(x)
localStorage.date = JSON.stringify(datePro)
clear()
 document.getElementById('h1').innerHTML = ''
 }
 else{

    document.getElementById('h1').innerHTML = 'Place Enter Date '
 }



total.innerHTML = `total :  `
showdate()
}
function clear(){
    name.value = ''
    prise.value=''
    texes.value=''
    ads.value=''
    cetgory.value=''
    count.value=''
}

function showdate(){

 let table;
 for(let i = 0 ; i<datePro.length ; i++){
    table += `
    <tr>
        <td>${[i]}</td>
    <td>${datePro[i].name}</td>
    <td>${datePro[i].prise}</td>
    <td>${datePro[i].texes}</td>
        <td>${datePro[i].ads}</td>
            <td>${datePro[i].cetgory}</td>
            <td><button onclick="delate(${i})" id="delate">delate</button></td>"
  </tr>
    `
    document.getElementById('fod').innerHTML = table;


 }
}


function total1(){

let x  = (+prise.value + +texes.value + +ads.value)
total.innerHTML = `total :  ${x}`

}
function delate(i){
 datePro.splice(i,1)
localStorage.date = JSON.stringify(datePro)
showdate()

}



showdate()
total1()
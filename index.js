const from =document.getElementById("from");
const to =document.getElementById("to")
const inputNumber =document.getElementById("input-number")
const resultBox= document.getElementById("result-box")


document.getElementById("convert").addEventListener("click",()=>{
    // grab Form
    let fromValve= from.value
    // check to 
    let toValue= to.value
    // check input number 
    let inputVlaue =inputNumber.value
    // convert input number "from" to "to"
    let result = convertBase (fromValve,toValue,inputVlaue)
    // show the result in result box 
    resultBox.innerText =result
})

function convertBase (fromBase, toBase,num){
    let d= parseInt (num ,fromBase)   // converting number into base10
    let res =d.toString(toBase)      // converting base10 requred base
    return res
}

document.getElementById("swap").addEventListener("click",() =>{
    let temp = from.value
    from.value =to.value
    to.value=temp
})
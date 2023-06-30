const copy=document.getElementById('copy');
const passwordfield=document.getElementById('input');
const length=document.getElementById('length');
const upper=document.getElementById('uppercase');
const lower=document.getElementById('lowercase');
const number=document.getElementById('numbers');
const symbol=document.getElementById('symbols');
const btn=document.getElementById('btn');
const form = document.getElementById("passwordgenertorform");
var submit;

function generateLowercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+97);
}

function generateUppercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+65);
}

function generateNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+48);
}

function generateSymbol(){
    const s ='~!@#$%^&*()_;:?/+=-<>{}[].,';
    return s[Math.floor(Math.random() * s.length)];
}

const random={
    lowercase: generateLowercase,
    uppercase: generateUppercase,
    numbers: generateNumber,
    symbols: generateSymbol,
};


btn.addEventListener('click',(e) =>{
    e.preventDefault();
    const lowercase=lower.checked;
    const uppercase=upper.checked;
    const numbers=number.checked;
    const symbols=symbol.checked;
    const len= +length.value;
    const password = generatePassword(lowercase,uppercase,numbers,symbols,len);
 
    passwordfield.innerText = password;
    submit=password;
 
});
function generatePassword(lowercase,uppercase,numbers,symbols,len){
    let password="";
    const checkedboxes=lowercase+uppercase+numbers+symbols;
    const Array=[{lowercase},{uppercase},{numbers},{symbols}].filter(
        item =>Object.values(item)[0]
    )

    for(var i=0;i<len;i+=checkedboxes){
        Array.forEach(element => {
            const funcn=Object.keys(element)[0];
            password += random[funcn]();
        });
    }
    //console.log(password);
    const result=password.slice(0,len);
    return result;
}



copy.addEventListener('click',(e)=>{
    e.preventDefault();
    navigator.clipboard.writeText(submit).then(() => {
        alert('Text copied to clipboard');
      }, (err) => {
        alert('Failed to copy text: ', err);
      });
      
})
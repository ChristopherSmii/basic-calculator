let calText='';
let limitValue=0;
let result=$('#resultMain');
//
//
//

const calFunction=(stringMain)=>{
let a,b,character,help;

a='';
b='';
help=false;
if(limitValue<=18){
for(let i=0;i<stringMain.length;i++){
    
    if(stringMain[i]>=0&&stringMain[i]<=9&&help==false){
        a=a+stringMain[i];
    }
    else if(help==false&&(stringMain[i]=='+'||stringMain[i]=='-'||stringMain[i]=='*'||stringMain[i]=='/')){
        character=stringMain[i];
        help=true;
        
    }
    else if(stringMain[i]>=0&&stringMain[i]<=9&&help==true){
        b=b+stringMain[i];
    }

}
limitValue++;
}
a=a*1;
b=b*1;

if(character=='+'){
    result.text(a+b);
}
else if(character=='-'){
    result.text(a-b);
}
else if(character=='*'){
    result.text(a*b);
}
else if(character=='/'){
    result.text(a/b);
}
else{
    alert('Not valid input');
}
}

// $('#calculatorText').on('keypress', function (event) {
//     if(event.key==='Enter'){
//         calFunction($('#calculatorText').text());
//     }})

    // 
$('button').on('click', function () {
    if(calText.length<16){
        calText=calText+$(this).text();
    }
    
    if($(this).text()=='Clear'){
        calText='';
        result.text('');
        limitvalue=0;
    }
    else if($(this).text()=='='){
        calFunction(calText);
        calText='';
        limitValue=0;
    }
    $('#calculatorText').text(calText);
    });
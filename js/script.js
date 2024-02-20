let calText='';
let result=$('#resultMain');
const calFunction=(stringMain)=>{
let a,b,character,help;

a='';
b='';
help=false;
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

    calText=calText+$(this).text();
    if($(this).text()=='Clear'){
        calText='';
        result.text('');
    }
    else if($(this).text()=='='){
        calFunction(calText);
        calText='';
    }
    $('#calculatorText').text(calText);
    });
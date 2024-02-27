let calText="";
let limitValue=0;
let resultt=$('#resultMain');
//
//
//
const lookAt=(key)=>{
    for(let i=0;i<key.length;i++){
        if(key[i]=='/'||key[i]=='*'||key[i]=='-'||key[i]=='+'){
            return true;
        }
    }
    return false;
}


// calculation function !!


const calFunction=(stringMain)=>{
    let a,b,character,help,help1,help2,r;
    help1='';
    help2='';
    a='';
    b='';
    help=0;
    
    let arrayOperations=[];
    for(let i=0;i<stringMain.length;i++){
        if(stringMain[i]=='*'||stringMain[i]=='/'||stringMain[i]=='+'||stringMain[i]=='-'){
            arrayOperations[i]=stringMain[i];
        }
        else{
            arrayOperations[i]='';
        }
    }
    //
    //
    //
    for(let i=0;i<stringMain.length;i++){
        if(arrayOperations[i]=='*'||arrayOperations[i]=='/'){
            character=arrayOperations[i];
        }
        else if(character!='/'&&character!='*'&&(arrayOperations[i]=='+'||arrayOperations[i]=='-')){
            character=arrayOperations[i];
        }
    }
    //
    //
    //
    for(let i=0;i<stringMain.length;i++){
        
        if(help==0&&(stringMain[i]=='*'||stringMain[i]=='/'||stringMain[i]=='+'||stringMain[i]=='-')&&stringMain[i]!=character){
            help1=help1+a+stringMain[i];
            a='';
        }
        else if(help==0&&(stringMain[i]=='*'||stringMain[i]=='/'||stringMain[i]=='+'||stringMain[i]=='-')&&stringMain[i]==character){
            help=1;
        }
        else if(help==1&&(stringMain[i]=='*'||stringMain[i]=='/'||stringMain[i]=='+'||stringMain[i]=='-')){
            help=2;
        }

        //
        //
        //
        if(help==0&&!(stringMain[i]=='*'||stringMain[i]=='/'||stringMain[i]=='+'||stringMain[i]=='-')){
            a=a+stringMain[i];
        }
        else if(help==1&&!(stringMain[i]=='*'||stringMain[i]=='/'||stringMain[i]=='+'||stringMain[i]=='-')){
            b=b+stringMain[i];
        }
        else if(help==2){
            help2=help2+stringMain[i];
        }
    }
    //
    //
    //
    console.log(arrayOperations);
    console.log(character);
    if(character=='+'){
        r=a*1+b*1;
    }
    else if(character=='-'){
        r=a*1-b*1;
    }
    else if(character=='*'){
        r=(a*1)*(b*1);
    }
    else if(character=='/'){
        r=(a*1)/(b*1);
    }
    return(help1+r+help2);
}


// calculation function !!



// $('#calculatorText').on('keypress', function (event) {
//     if(event.key==='Enter'){
//         calFunction($('#calculatorText').text());
//     }})

    // 
$('button').on('click', function () {
    if(calText.length<24&&$(this).text()!='='){
        calText=calText+$(this).text();
    }
    
    if($(this).text()=='Clear'){
        calText='';
        resultt.text('');
        limitValue=0;
    }
    else if($(this).text()=='='){
        //Main Idea?
        //
        //
        //  <<<------>>>
        while(lookAt(calText)){
            calText=calFunction(calText);
        }
            resultt.text(calText);
        


        limitValue=0;
        // let calApi="https://newton.now.sh/api/v2/simplify/"+calText;
        // apiFunction(calApi);
        calText='';
    }
    $('#calculatorText').text(calText);
    });

    // function apiFunction(aKey){
    //     console.log(aKey);
    //     fetch(aKey).then(res=>res.json()).then((data)=>{
    //         resultt.text(data.result);
            
    //     })
        
    // }

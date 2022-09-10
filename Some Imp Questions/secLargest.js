let a = 2, b = 3, c = 4;
if(a>b){
    if(a>c){
        console.log(c);
        }
    else{
        console.log(a);
        }
    }
else if(a>c){
        if(b>c){
        console.log(b);
        }
        else{
        console.log(c);
        }
    }
else if(b>c){
        console.log(c);
    }
else{
    console.log(b);
}
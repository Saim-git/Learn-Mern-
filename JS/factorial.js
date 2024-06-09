var a = 9;

function fact(a)
{
    if (a == 0 || a == 1) {
        return 1;
    }
    else {
    return (a * fact(a - 1));
}
}

console.log(fact(a));

//or

let b=1;
for(let i=1;i<=a;i++){
b=b*i;
}

console.log(b);
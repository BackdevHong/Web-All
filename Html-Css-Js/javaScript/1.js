var a = 1;
function outer(){
    console.log(a);

    function inner(){
        var a = 3;
        console.log(a);
    }

    inner();

    console.log(a);
}
outer();
console.log(a)
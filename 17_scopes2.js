
//scopes inside a function

/* Remember when there is a nested function then the variable 
inside the child function can acces the variables of the parent function ,
but the parent function does not access the variables of the child function

Also parent function will work only if the cild function works if 
you call a parent function without calling a child function then the parent function
will not work*/

function one() {
    const firstname = "Arnav"

    function two() {
        const lastname = "Sagar"
    }   console.log(firstname);

/*console.log(lastname); /* will not work because parent function doesn't
                s         cannot access variables in child function*/

    two();
}
one();

// hoisting introduction

//case : 2
console.log(addone(5)); //can be accessedcm 

function addone(num){
    return num +1
}

//case : 2
console.log(addtwo(5)); //cannot be accessed

function addtwo(num){
    return num +2
}
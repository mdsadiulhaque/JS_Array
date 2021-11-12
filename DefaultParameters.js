

function interest (principal,rate=3.5,years){
    return principal* rate/100*years;
}

console.log(interest(10000,undefined,5));

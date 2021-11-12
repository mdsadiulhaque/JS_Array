

const person ={
    firstName : 'Sadiul',
    lastName: ' Fahad',
    
    set fullName(value){

        if (typeof value !=='string')
        throw new Error ('Value is not string.');


        const parts=value.split('');
        this.firstName= parts[0];
        this.lastName= parts[1];

    }

};

try{
    person.fullName = '';
}

catch (e){
    alert(e);
} 

console.log(person);


const person ={
    firstName : 'Sadiul',
    lastName: ' Fahad',
    get fullName(){
return `$ { person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts=value.split('');
        this.firstName= parts[0];
        this.lastName= parts[1];

    }

};
person.fullName = 'Md Sadiul Haque';

console.log(person);
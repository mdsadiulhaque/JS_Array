 
// const numbers = [2,3,1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
    { id:1,name: 'Node.js' },
    { id:2,name: 'JavaScript' },
];

courses.sort(function(a,b)
{
// a<b=>-1
// a>b=>1
// a===b=>0
const nameA=a.name.toLowerCase();
const nameB=b.name.toLowerCase();

if(a.name<b.name)return-1;
if(a.name>b.name)return 1;
return 0;

}
);
//courses.sort();

console.log(courses);
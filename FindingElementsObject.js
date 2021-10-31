
const course=[
{ id: 1, name:'a'},
{ id:2, name:'b'},
];

const course = course.find(function(course){
    return course.name==='xyz';
});

console.log(course);

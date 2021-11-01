 
//  const first =[1,2,3];
const first =[{id:1}];
 const second =[4,5,6];

 const combined = first.concat(second);
 first[0].id=10;

 const slice = combined.slice();

 console.log(combined);
 console.log(slice);
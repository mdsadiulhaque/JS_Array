
console.log(1, 2, 3, 4);
function sum(...items){
    if ( items.length===1 && Array.isArray (items [0] ))
    items=[...items [0]];
    return items((a, b) => a + b);

}
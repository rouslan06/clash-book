
export const isEmpty = (value) => {
    return ( 
        value = undefined || value == null
    );
};








// function isEmpty(obj){
//     for (const property in obj){
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty({})); 
// console.log(isEmpty({id: 1, name: 'Alice'}));

// export default isEmpty;
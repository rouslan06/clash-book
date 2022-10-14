
/* possibilité de le supprimer, ne semble pas avoir d'impact sur le reste de la page 3 à vérifier tout de même !!! */

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
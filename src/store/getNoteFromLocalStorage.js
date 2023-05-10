import React from 'react'

const getNoteFromLocalStorage = (itemName) => {

    let data = localStorage.getItem(itemName);
    let parsedData = JSON.parse(data);

    if (!Array.isArray(parsedData)) {
        return []
    }

    return parsedData

    // let data = localStorage.getItem(itemName);
    // if(data){
    //     return JSON.parse(localStorage.getItem(itemName));
    // } else {
    //     return [];
    // }


}

export default getNoteFromLocalStorage;




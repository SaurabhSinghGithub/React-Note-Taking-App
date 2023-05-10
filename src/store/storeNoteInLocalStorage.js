import React from 'react'

const storeNoteInLocalStorage = (itemName, data) => {
    return (

        localStorage.setItem(itemName, JSON.stringify(data))

    )
}

export default storeNoteInLocalStorage;



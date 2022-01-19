import React from 'react';
import FormListItem from '../Forms-list-item/index.js';


function FormList({forms}) {
    return (
        <ul> {
        forms.map(function(item) {
            return <FormListItem item={item} key={item.key} />
    }) 
    } </ul>
    )
}

export default FormList;
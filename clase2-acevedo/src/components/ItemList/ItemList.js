import React from 'react'
import './ItemListStyle.css';
import { Item } from '../Item/Item';

export const ItemList = ({items}) => {
    return (
        items.map(p => 
            <Item key={p.id} {...p}/>
        )
    )
}

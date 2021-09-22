import React from 'react'
import { Item } from './Item'
import {MdDelete} from 'react-icons/md'

export const List = ({expenses,handleEdit,handleDelete,clearItems}) => {

    return (
        <>
            <ul className='list'>
                {
                    expenses.map(item => {
                        return <Item key={item.id} {...item} handleDelete={handleDelete} handleEdit={handleEdit}></Item>
                    })
                }
            </ul>
            {
                expenses.length > 0 && <button onClick={clearItems} className='btn'>clear expenses <MdDelete className='btn-icon'/></button>
            }
        </>
    )
}

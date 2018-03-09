import React from 'react'

import Item from './Item'

const ItemsList = ({ imagesData }) => {
    console.log('images data....',imagesData)
    return (
        <ul>
            {
             imagesData &&   imagesData.map((image) => {
                    return <Item key={image.id} original={image.images['original']} />
                })
            }
        </ul>
    )
}

export default ItemsList
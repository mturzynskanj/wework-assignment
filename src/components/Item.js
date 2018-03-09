import React from 'react'

const Item = ({
    original}) => {
           return(
            <li> 
                <img src={original.url}  />
            </li>
    ) 
}
 
export default Item
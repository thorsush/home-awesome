import React from 'react'

export default function Button({name,title,click}) {
    return (
        
            <button title={title} onClick={click}>{name}</button>
      
    )
}

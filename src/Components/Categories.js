import React from 'react'

function Categories({filter, categories}) {
    return (
        <div className="buttons-port">
            {
                categories.map((cat, index) =>{
                    return <button type="button"  className="btn-port" key={index} onClick={() => filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories

import React from 'react'
import './card.css'

// const Card = ({name,price,image,description}) => {
const Card = (myitem) => {

    // console.log(myitem)
    const name = myitem.name
    const price = myitem.price
    const description = myitem.description
    const image = myitem.image
     return (
        <>

            <div className="col shadow-lg">
                <div className="card shadow-lg">
                    <div className='img-container'>
                        <img src={`${image}`} className="card-img-top" alt={name} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-title">{price}</h6>
                        <p className="card-text text-truncate"
                            title={description}>{description}</p>
                        <button className='btn btn-warning'>View Details</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
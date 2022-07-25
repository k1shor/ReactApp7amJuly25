import React, { useContext } from 'react'
import Card from '../Card'
import { GlobalContext } from '../GlobalContext'

const Display = () => {
    const items = [{
        name: "Real Me",
        price: "Rs. 13,000",
        description: "a very handy phone",
        image: "./image/realme.png"
    },
    {
        name: "Samsung Galaxy A21",
        price: "Rs. 15,000",
        description: "a very handy phone at affordable price",
        image: "./image/sam1.jpg"
    },
    {
        name: "Samsung Note 20",
        price: "Rs. 2,00,000",
        description: "a very handy phone",
        image: "./image/sam2.jpg"
    },
    {
        name: "Apple IPhone x13",
        price: "Rs. 2,13,000",
        description: "a deluxe phone",
        image: "./image/realme.png"
    }]


    const msg = useContext(GlobalContext)

    return (
        <>
            <div className='container-fluid'>
                <h1>{msg}</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {items.map(i=>{
                        return <Card name={i.name} price={i.price} description={i.description} image={i.image}/>
                    })

                    }
                </div>

            </div>
        </>
    )
}

export default Display
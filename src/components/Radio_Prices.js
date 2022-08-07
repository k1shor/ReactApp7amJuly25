import React, {useState} from 'react'
import { prices } from './Prices'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'


const Radio_Prices = ({myfunction}) => {
    // const [selected, setSelected] = useState([])

    // const handleChange = e => {
        // setSelected(handlePrice(e.target.value))
        // console.log(selected)
        // myfunction(handlePrice(e.target.value))
    // }

    const handlePrice = e => {
        let priceValue = []
        let index = prices.find(price=>price.id == e.target.value)
        priceValue = index.value
        // return priceValue
        myfunction(priceValue, 'product_price')
    }

    return (
        <>
            <RadioGroup name='prices'>
                {prices.map((price, i) => {
                    return <FormControlLabel value={price.id} control={<Radio />} label={price.name} onChange={handlePrice}/>
                })}
            </RadioGroup>

        </>
    )
}

export default Radio_Prices
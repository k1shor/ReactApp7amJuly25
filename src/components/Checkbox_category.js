import React, { useEffect, useState } from 'react'
import { getCategories } from '../api/categoryAPI'

const Checkbox_category = ({myfunction}) => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])

    useEffect(() => {
        getCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        const new_checked = [...checked]
        const clicked = e.target.value
        const index = new_checked.findIndex(item => item === clicked)
        // returns index if found, -1 if not found
        if(index === -1){
            new_checked.push(clicked)
        }
        else{
            new_checked.splice(index, 1)
        }
        setChecked(new_checked)
        // console.log(new_checked)
        myfunction(new_checked, 'category')
    }



    return (
        <>
            {
                categories.map((category, i) => {
                    return <div className="form-check" key={i}>
                        <input className="form-check-input" type="checkbox" value={category._id} id={`flexCheck${i}`} onChange= {handleChange} />
                        <label className="form-check-label" htmlFor={`flexCheck${i}`}>
                            {category.category_name}
                        </label>
                    </div>
                })
            }

        </>
    )
}

export default Checkbox_category
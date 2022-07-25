import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [post, setPost] = useState([])
    const [limit, setLimit] = useState(20)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
            // .then(response=>response.json())        
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)

            .then(data => setPost(data.slice(0,limit)))
            .catch(()=>console.log("failed to fetch data"))
    }, [limit])

    return (
        <>
            {
                post.map(item=>{
                    return <div className='m-3 p-3 shadow'>
                        <h1>{item.id}: {item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                })
            }
            {
                limit<100 &&
                <button className='btn btn-info' onClick={()=>{return setLimit(limit+20)}}>Show more</button>
            }
            {
                limit>0 &&
                <button className='btn btn-danger' onClick={()=>{return setLimit(limit-20)}}>Show less</button>
            }
        </>
    )
}

export default DataFetch
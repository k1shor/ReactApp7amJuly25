import { API } from "../config"

export const getProducts = () => {
    return fetch(`${API}/productlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}


export const addProduct = (product, token) => {
    return fetch(`${API}/addproduct`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const productDetails = (id) => {
    return fetch(`${API}/productdetails/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`,{
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const editProduct = (id, product, token) => {
    return fetch(`${API}/product/update/${id}`,{
        method:"PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// to get filtered products from backend
export const getFilteredProducts = (sortBy, order, limit, skip, myfilter) => {
    return fetch(`${API}/filteredproducts?sortBy=${sortBy}&order=${order}&$limit=${limit}&skip=${skip}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(myfilter)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
// to get related Products
export const getRelatedProducts = (id) => {
    return fetch(`${API}/relatedproducts/${id}`,{
        method: "GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
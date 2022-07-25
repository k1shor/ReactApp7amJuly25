import { API } from "../config"

export const getCategories = () => {
    return fetch(`${API}/viewcategories`, {
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// add category
export const addCategory = (category_name, token) => {
    return fetch(`${API}/addCategory`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// to get category details
export const getCategoryDetails = (id) => {
    return fetch(`${API}/findcategory/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// to edit category
export const editCategory = (id, category_name, token) => {
    return fetch(`${API}/updatecategory/${id}`,{
        method: "PUT",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
// to delete category
export const deleteCategory = (id, token) => {
    return fetch(`${API}/deletecategory/${id}`,{
        method:"DELETE",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

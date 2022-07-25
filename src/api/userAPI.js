import { API } from "../config";
// API : http://localhost:5000/api

export const register = (username, email, password) => {
    const user = {username, email, password}
    return fetch(`${API}/register`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(error=>console.log(error))
}

export const confirmUser = (token) => {
    return fetch(`${API}/confirmuser/${token}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const signIn = (email, password) => {
    const user = {email, password}
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const authenticate = (data) => {
    localStorage.setItem('jwt',JSON.stringify(data))
}

export const isAuthenticated = () => {
    return localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')):false
}

export const signOut = (cb) => {
    localStorage.removeItem('jwt')
    cb()
}

export const forgetPassword = (email) => {
    return fetch(`${API}/forgetpassword`,{
        method: "POST", 
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const resetPassword = (token, password) => {
    return fetch(`${API}/resetpassword/${token}`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
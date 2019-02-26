import cookies from 'js-cookie'

const loginSign = 'MyLogin'
const tokenSign = 'Bearer '

export function setCookie(value){
    return cookies.set(loginSign,`${tokenSign+value}`)
}

export function getCookie(){
    return cookies.get(loginSign)
}

export function removeCookie(){
    return cookies.remove(loginSign)
}
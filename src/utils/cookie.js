import cookies from 'js-cookie'

const loginSign = 'MyLogin'

export function setCookie(value){
    return cookies.set(loginSign,value)
}

export function getCookie(){
    return cookies.get(loginSign)
}

export function removeCookie(){
    return cookies.remove(loginSign)
}
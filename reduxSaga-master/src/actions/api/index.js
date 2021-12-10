//,ethodo generico para peticiones puede reemplazarse por axios????
export function apiCall(method, url) {
    return fetch(url, {
        method
    }).then(res => res.json())
}
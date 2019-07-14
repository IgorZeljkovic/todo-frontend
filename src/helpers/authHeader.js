export function authHeader () {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        headers: {
            'Authorization': `Bearer ${ user.access_token }`
        }
    }
}
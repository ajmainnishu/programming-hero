// cookieStore




// document.cookie




// typeof document.cookie




// document.cookie.split('; ');




// document.cookie.split('; ').map(c => console.log(c));




// document.cookie.split('; ').map(c => console.log(c.split('=')));




const getCookieByName = name => {
    const cookieString = document.cookie;
    const cookieParts = cookieString.split('; ');
    const cookie = cookieParts.find(c => c.includes(name));
    if (cookie) {
        const cookieValue = cookie.split('=')[1]
        return cookieValue;
    }
}
const result = getCookieByName('country');
console.log(result);
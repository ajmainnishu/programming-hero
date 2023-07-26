// navbar fetch data
const loadingNavbarFetchData = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`;
        const res = await fetch(url);
        const data = await res.json();
        displayNavbarFetchData(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }
}


// display navbar fetch data
const displayNavbarFetchData = names => {
    const navbarItems = document.getElementById('navbar-items');
    names.forEach(name => {
        const navbarDiv = document.createElement('div');
        navbarDiv.innerHTML = `
            <a class="bt p-2 color-text-gray text-decoration-none navbar-hover" onclick=categoryItemId('${name.category_id}')>${name.category_name}</a>
        `
        navbarItems.appendChild(navbarDiv);
    })
    
}


// navbar loading
loadingNavbarFetchData();
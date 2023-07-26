// category fetch data
const categoryItemId = async id => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        displayCategoryItemId(data.data);
    }
    catch (error) {
        console.log(error);
    }
}


// display categroy fetch data
const displayCategoryItemId = data => {
    loadingSpinner(true);
    data.sort((a, b) => {
        return b.total_view - a.total_view
    });
    const itemsFound = document.getElementById('items-found');
    itemsFound.innerHTML = `
        <p class="p-3 bg-white rounded-3">${data.length} items found</p>
    `
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.textContent = '';
    data.forEach(data => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('row');
        categoryDiv.classList.add('align-items-center');
        categoryDiv.classList.add('mb-4');
        categoryDiv.classList.add('py-4');
        categoryDiv.classList.add('px-2');
        categoryDiv.classList.add('bg-white');
        categoryDiv.classList.add('rounded-3');
        categoryDiv.classList.add('shadow-sm');
        categoryDiv.innerHTML = `
        <div class="col-12 col-md-3 text-center text-md-start">
            <img class="img-fluid rounded-3" src="${data.thumbnail_url ? data.thumbnail_url : 'NO Data Avaialble'}" alt="">
        </div>
        <div class="col-12 col-md-9 mt-3 mt-md-0">
            <h3 class="fw-bold color-title">${data.title ? data.title : 'No Data Available'}</h3>
            <p class="color-para">${data.details.slice(0, 250)}</p>
            <p class="color-para">${data.details.slice(250, 400)}...</p>
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div class="d-flex align-items-center my-3 my-md-0">
                    <div>
                        <img class="author-img" src="${data.author.img ? data.author.img : 'No Data Available'}" alt="">
                    </div>
                    <div class="ps-2">
                        <p class="mb-0 color-text-author">${data.author.name ? data.author.name : 'No Data Available'}</p>
                        <p class="mb-0 color-text-publish">${data.author.published_date ? data.author.published_date.slice(0, 10) : 'No Data Available'}</p>
                    </div>
                </div>
                <div class="d-flex my-3 my-md-0">
                    <div><i class="fa-regular fa-eye"></i></div>
                    <p class="mb-0 ms-2 fw-bold color-text-eye">${data.total_view ? data.total_view : 'No Data Available'}</p>
                </div>
                <div class="d-flex my-3 my-md-0">
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star-half-stroke"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                </div>
                <div class="my-3 my-md-0">
                    <a onclick="categoryDetails('${data._id}')" class="mb-0 mouse-pointer " data-bs-toggle="modal" data-bs-target="#categoryDetails"><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        `
        categoryContainer.appendChild(categoryDiv);
    })
    loadingSpinner(false);
}
// modal fetch data
const categoryDetails = async id => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        modalItemDetails(data.data[0])
    }
    catch (error) {
        console.log(error);
    }

}


// display modal fetch data
const modalItemDetails = data => {
    console.log(data);
    const categoryDetailsLabel = document.getElementById('categoryDetailsLabel');
    categoryDetailsLabel.innerText = data.title;
    const bodyModal = document.getElementById('body-modal');
    bodyModal.innerHTML = `
        <p><b>Author: </b>${data.author.name ? data.author.name : 'No Data Found'}</p>
        <p><b>Publish: </b>${data.author.published_date ? data.author.published_date : 'No Data Found'}</p>
        <p><b>Rating: </b>${data.rating.number ? data.rating.number : 'No Data Found'}</p>
        <p><b>Badge: </b>${data.rating.badge ? data.rating.badge : 'No Data Found'}</p>
        <p><b>Views: </b>${data.total_view ? data.total_view : 'No Data Found'}</p>
    `
}
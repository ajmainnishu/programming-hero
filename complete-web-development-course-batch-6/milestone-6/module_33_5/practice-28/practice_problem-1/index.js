const loadCommentsFetch = async () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    const res = await fetch(url);
    const data = await res.json();
    displayComments(data)
}
const displayComments = (comments) => {
    const commentsContainer = document.getElementById('comments-container');
    const sliceArray = comments.slice(0, 20);
    sliceArray.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-box');
        commentDiv.innerHTML =  `
            <p onclick="loadCommentDetails(${comment.id})">${comment.body}</p>
        `
        commentsContainer.appendChild(commentDiv);
    })
}
loadCommentsFetch();
const loadCommentDetails = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${userId}`
    const res = await fetch(url);
    const data = await res.json();
    displayCommentDetails(data);
}
const displayCommentDetails = comment => {
    const commentDetails = document.getElementById('comment-details');
    commentDetails.textContent = ``;
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment-box');
    commentDiv.innerHTML = `
        <h3>${comment.title}</h3>
        <p>${comment.body}</p>
    `
    commentDetails.appendChild(commentDiv);
}
function postsRender(posts) {
    //loop through all posts then render to the page
    console.log(posts);
    const opening = `<ul id="listGroup" class="list-group mt-5">`
    const closing = `</ul>`
    const item = posts.data.map(postRender).join('')
    // let html = ``;
    //     posts.data.forEach(post => {
    //         html += postRender(post);
    //     })
   return opening + item + closing;
};

function postRender(post) {
    return `<a 
        href="#/posts/${post.id}" 
        class="list-group-item"
        >${post.title}</a>
    `
}


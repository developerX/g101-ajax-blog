function createNewPost(event) {
    event.preventDefault();
    // grab the values we need
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const tag = document.getElementById('post-tag').value;
    const user = document.getElementById('post-user').value;

    console.log(title, content, tag, user);
    // set values to an object
    const objToPost = {
        title,
        content,
        tag,
        user
    }
    // post that object to the backend
    axios.post('http://localhost:3000/posts', objToPost)
    // get a response
        .then(results => {
            //Success
            console.log(results);
        })
        .catch(err => {
            //failure
            console.log(err); 
        })
}

const view = document.getElementById('view');


function goToForm() {
    view.innerHTML = " I am the form"
}


// windows location.hash

function router () {
    const route = determineRoute();
    if ( route === 'new' ) {
        // go to new route
        return goToForm()
    } else if (route === 'edit') {
        // go to post route
        return editPost(+route);
    } 
    else if (Number.isInteger(+route)) {
        // go to post route
        return postEntity(+route);
    } else {
        return goToPosts()
    }
}

window.onhashchange = () => router();

router();



   

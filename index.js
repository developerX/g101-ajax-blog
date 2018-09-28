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



   

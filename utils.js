function determineRoute() {
    return window.location.hash.replace('#/posts/','').replace(/\/.+/,'');
}
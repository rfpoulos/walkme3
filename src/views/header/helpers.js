export let isSignedIn = (userObject) => {
    if (userObject) {
        return 'visible';
    } else {
        return 'invisible';
    }
}
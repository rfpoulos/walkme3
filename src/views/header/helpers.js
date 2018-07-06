export let isSignedIn = (userObject) => {
    console.log(userObject)
    if (userObject) {
        return 'visible';
    } else {
        return 'invisible';
    }
}
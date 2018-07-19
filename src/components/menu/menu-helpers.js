export let route = (history, path)=> () => {
    history.push('/' + path)
}

export let logout = (history, resetState) => () => {
    localStorage.clear();
    resetState();
    route(history, 'signin')();
}
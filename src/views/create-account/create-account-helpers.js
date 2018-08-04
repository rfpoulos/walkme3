import { server } from '../../variables';
import { signIn } from '../../views/sign-in/sign-in-helpers';

let fetchCreateAccount = (createAccountForm) =>
    fetch(server + 'createaccount', {
        method: "POST",
        body: JSON.stringify(createAccountForm),
        headers: new Headers ({
            "Content-Type": "application/json",
            })
    })
    .then(res => res.text());

export let createAccount = (
    createAccountForm, 
    updateUserObject, 
    history
) => 
    async () => {
        try {
            await fetchCreateAccount(createAccountForm);
            await signIn({
                identifier: createAccountForm.email,
                password: createAccountForm.password
            }, updateUserObject, history)()
        } catch(err) {
            console.log(err)
        }
    };
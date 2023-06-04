const checkAuthentication = () => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (user && user.token) {
        console.log(user);
        return { "x-auth-token": user }
    }
    else {
        return {}
    }
}

export default checkAuthentication;
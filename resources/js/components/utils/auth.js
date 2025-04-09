
export const getAuth = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    return auth
};

export const saveAuth = (auth, isRefresh = true) => {
    localStorage.setItem('auth', JSON.stringify(auth));
    if (isRefresh) {
        window.location.href = `${window.location.origin}/${auth.user?.role == 1 ? 'admin' : 'user'}/dashboard`;
    }

};
export const logoutUser = () => {
    localStorage.removeItem('auth')
    window.location.href = window.location.origin;
}
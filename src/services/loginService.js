export function loginService(username, password) {
    if (username === 'admin' && password === '12345') {
        localStorage.setItem('login', true);
        return true;
    }
    return false;
}
export function logoutService() {
    if (localStorage.getItem('login')) localStorage.removeItem('login');
}
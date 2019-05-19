export function fetchNewsAPI() {
    return fetch('https://newsapi.org/v2/top-headlines?' +
        'country=us&' + 'pageSize=10&' +
        'apiKey=3001fa4a68f744de993966133042a8f5')
        .then(response => {
            if (response.ok) return response;
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json());
}
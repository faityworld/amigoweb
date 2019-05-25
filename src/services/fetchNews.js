
export async function fetchNewsService() {
    try {
        let key = process.env.REACT_APP_NEWS;
        let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey='+key);

        if (response.ok) {
            let result = response.json();
            return result;
        }
        else throw new Error(response.status); 
    }
    catch(err) {
        throw new Error(err.message);
    }
}
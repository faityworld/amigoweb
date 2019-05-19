
export async function fetchNewsService() {
    try {
        let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=3001fa4a68f744de993966133042a8f5');

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
export interface News {
    source: {
        id: string;
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

}


class NewsApi {


    static getNews(url: string) {
        return fetch(url, {
            next: {
                revalidate: 60 * 60 * 1,
            }
        })
            .then((res) => res.json())
            .then((data) => data.articles as News[])
    }
    static getHeadLines(): Promise<News[]> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=50e8ec92df0e49c89286b0635493b515`;
        return this.getNews(url);
    }
}

export default NewsApi;
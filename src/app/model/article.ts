export class Article {
    id: number;
    title: string;
    content: string;
    create_at: Date;
    modify_at: Date;
    state: number;
    author: string;

    /* NOT NEED ?
    constructor(id: number, title: string, content: string,
        create_at: Date, modify_at: Date, state: number, author: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.create_at = create_at;
        this.modify_at = modify_at;
        this.state = state;
        this.author = author;
        }
    */
}

/*
let ArticlesPokemonEvoli: Articles;
let ArticlesPokemonPyroli: Articles;

ArticlesPokemonEvoli = new Articles(1, 'Evoli', 'Ceci est un Pokemon Article 1 ');
ArticlesPokemonPyroli = new Articles(2, 'Pyroli', 'Ceci est un Pokemon Article 2');

export let tabArticles: Array<Articles> = [];
tabArticles.push(ArticlesPokemonEvoli, ArticlesPokemonPyroli);

*/

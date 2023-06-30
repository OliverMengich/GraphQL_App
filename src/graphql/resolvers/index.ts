import { ParseOptions } from "graphql";
import { books } from "../../data/data.js";
import { products } from "../../data/data.js";
type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
    img: string;
    description: string;
};
type Product = {
    id: number |string;
    name: string;
    price: number;
    store: string;
    slug: string
};
export const resolvers = {
    SearchResult: {
        __resolveType(obj: any, context:any, info:any) {
            if (obj.name) {
                return 'Product';
            }
            if (obj.title) {
                return 'Book';
            }
            return null; // Return null if the type cannot be resolved
        },
    },
    Query: {
        books: () => books,
        products: () => products,
        book: (parent: unknown, args: any, contextValue: any, info: any) => {
            console.log(args)
            const book = books.find((book:Book) => book.id === parseInt(args.id));
            return book;
        },
        product: (parent: unknown, args: any, contextValue: any, info: any) => {
            const product = products.find((product: Product) => product.id === parseInt(args.id));
            return product;
        },
    },
    Mutation: {
        addBook: ( args: Book) => {
            const book = {
                id: books.length + 1,
                title: args.title,
                author: args.author,
                price: args.price,
                img: args.img,
                description: args.description,
                slug:args.title.split(' ').join('-')
            };
            books.push(book);
            return book;
        },
        search: (parent: unknown, args: any, contextValue: any, info: any) => {
            const searchProduct = products.filter((product :Product)=> product.name.includes(args.name));
            const searchBook = books.filter((book:Book) => book.title.toLowerCase().includes(args.name.toLowerCase()));
            const result = [
                ...searchProduct, 
                ...searchBook
            ];
            const result1=[
                {products:[...searchProduct]},
                {books:[...books]}
            ]
            console.log(result)
            return result;
        },
    }
};
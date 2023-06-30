const typeDefs = `
    type Book{
        id: ID!
        title: String!
        author: String!
        description: String!
        price: Float!
        img: String!
        slug: String
    }
    type Product{
        id: ID!
        name: String!
        description: String
        price: Float!
        image: String!
        slug: String
    }
    union SearchResult = Book | Product
        
    type Query{
        books: [Book]
        book(id: String!): Book
        products: [Product]
        product(id: String!): Product,
    }
    type Mutation{
        search(name: String!): [SearchResult]
        addBook(title: String!, author: String!, description: String!, price: Float!, image: String!): Book
        updateBook(id: ID!, title: String!, author: String!, description: String!, price: Float!, image: String!): Book
        # deleteBook(id: ID!): Book
        # addProduct(name: String!, description: String!, price: Float!, image: String!): Product
        # updateProduct(id: ID!, name: String!, description: String!, price: Float!, image: String!): Product
        # deleteProduct(id: ID!): Product
    }

`;
export { typeDefs };
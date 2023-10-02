//allow resolver to access the database

const typeDefs = `#graphql
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
}
Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
    removeBook(bookId: String): User
}
`;

module.exports = typeDefs;
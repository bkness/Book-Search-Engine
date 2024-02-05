const gql = String.raw 
const typeDefs = gql`
type User {
    _id: ID! 
    username: String! 
    # exclamation declares it as a required field
    email: String!    
    savedBooks: [Book]
}
type Book {
    bookId: ID!
    description: String
    authors: [String]
    image: String
    link: String
    title: String! 
}
type Auth {
    token: ID!
    user: User
}
# objects get incapsulated to send off to the network with a single variable name 
input BookInput {
    bookId: ID!
    description: String
    authors: [String]
    image: String
    link: String
    title: String! 
}
type Query {
    me: User
    # gets data about the logged in user
}
type Mutation {
    #Function parameters
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User 
    removeBook(bookId: ID!): User 
}
`

module.exports = typeDefs
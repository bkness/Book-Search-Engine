import { gql } from '@apollo/client'

export const QUERY_ME = gql`
query Query {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        description
        authors
        image
        link
        title
      }
    }
  }
`

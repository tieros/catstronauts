import { gql } from 'apollo-server';

const typeDefs = gql`
"Query Types"
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
    }

"A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }
"Author of a complete Track"
    type Author {
        id: ID!
        name: String!
        "Author's profile picture url"
        photo: String
    }
`;

export default typeDefs;
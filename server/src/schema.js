import { gql } from 'apollo-server';

const typeDefs = gql`
"Query Types"
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }

    type Mutation {
        "Returns a response consisted of information and track"
        incrementTrackViews(id: ID!): incrementTrackViewsResponse!
    }

    type incrementTrackViewsResponse {
        code: Int!
        success: Boolean!
        message: String!
        "Returning track is nullable since an error might be occur when updating the data"
        track: Track
    }

"A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
        modules: [Module!]!
    }
"A module is a single unit of teaching. Multiple Modules compose a Track"
    type Module {
        id: ID!
        title: String!
        length: Int
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
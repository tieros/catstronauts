export const resolvers = {
    Query: {
        // returns an array of Tracks 
        tracksForHome: (_, __, {dataSources}) => {
           return dataSources.trackAPI.getTracksForHome();
        },
        // returns single track by id
        track: (_, {id}, {dataSources}) => {
            return dataSources.trackAPI.getTrack(id)
        }
    },
    Track: {
        author:({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId)
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id)
        }
    }
}
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
    Mutation: {
        // Response should include message, code, success and the track object
        // That's why we can't return immediately like other ones
        incrementTrackViews: async (_, {id}, {dataSources}) => {
            const track = await dataSources.trackAPI.incrementTrackViews(id)
            return {
                code: 200,
                success: true,
                message: `Successfully incremented number of views for track ${id}`,
                track
            }   
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
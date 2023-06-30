import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./graphql/schema/index.js";
import { resolvers } from "./graphql/resolvers/index.js";

const server = new ApolloServer({ typeDefs, resolvers,
    plugins: [
        // ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
 });
const url = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    } 
});
console.log(`🚀 Server ready at ${url}`);
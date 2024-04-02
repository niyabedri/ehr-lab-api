const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { createClient } = require("hasura-graphql-client");
const { gql } = require("graphql");

const app = express();
const PORT = 8031;

// Create an instance of ApolloServer
const server = new ApolloServer({
  // Your GraphQL schema and resolvers go here
});

// Apply the Apollo Server middleware to the Express app
server.applyMiddleware({ app });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/graphql`);
});

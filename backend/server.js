const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    title: 'Consider The Lobster',
    author: 'David Foster Wallace',
    url: 'https://en.wikipedia.org/wiki/Consider_the_Lobster',
  },
  {
    title: 'Love in the Time of Cholera',
    author: 'Gabriel García Márquez',
    url: 'https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera',
  },
  {
    title: 'The Color Purple',
    author: 'Alice Walker',
    url: 'https://en.wikipedia.org/wiki/The_Color_Purple',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
    url: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

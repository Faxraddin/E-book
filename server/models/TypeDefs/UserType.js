const {
  graphql,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
} = require("graphql");

const UserType = new GraphQLInputObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

module.exports = UserType;

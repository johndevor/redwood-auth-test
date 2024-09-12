export const schema = gql`
  type Thing {
    id: ID!
    name: String!
    createdAt: DateTime!
  }

  type Query {
    things: [Thing!]! @requireAuth
    thing(id: ID!): Thing @requireAuth
  }

  input CreateThingInput {
    name: String!
  }

  input UpdateThingInput {
    name: String
  }

  type Mutation {
    createThing(input: CreateThingInput!): Thing! @requireAuth
    updateThing(id: ID!, input: UpdateThingInput!): Thing! @requireAuth
    deleteThing(id: ID!): Thing! @requireAuth
  }
`

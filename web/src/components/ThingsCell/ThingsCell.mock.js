// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  things: [
    {
      __typename: 'Thing',
      id: '42',
    },
    {
      __typename: 'Thing',
      id: '43',
    },
    {
      __typename: 'Thing',
      id: '44',
    },
  ],
})

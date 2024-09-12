export const QUERY = gql`
  query ThingsQuery {
    things {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ things }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {things.map((item) => (
        <div key={item.id} className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-600">Created at: {new Date(item.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

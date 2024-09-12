import { useAuth } from '../../auth'

const HomePage = () => {
  const { currentUser, isAuthenticated, logIn, logOut } = useAuth()

  return (
    <>
      {isAuthenticated ? (
        <>
          <button onClick={logOut}>Log out</button>
          <h1>Hello {currentUser.firstName}, you are logged in!</h1>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </>
  )
}

export default HomePage

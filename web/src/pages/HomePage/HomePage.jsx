import React from 'react';
import { Link } from '@redwoodjs/router';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import ThingsCell from 'src/components/ThingsCell/ThingsCell';
import { useAuth } from '../../auth';

const HomePage = () => {
  const { currentUser, isAuthenticated, logIn, logOut } = useAuth();

  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg mb-4">This is a simple homepage.</p>
        <Link to="/login" className="text-blue-500 hover:underline">Go to Login</Link>
        {isAuthenticated ? (
          <>
            <button onClick={logOut} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Log out</button>
            <h1 className="mt-4">Hello {currentUser.firstName}, you are logged in!</h1>
          </>
        ) : (
          <button onClick={logIn} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Log in</button>
        )}
        <div className="mt-8">
          <ThingsCell />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;

import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'TrelloClone';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top'>
        <h2>TrelloClone</h2>
        <div>
          <Button color='inherit' href='/login'>
            Login
          </Button>
          <Button variant='contained' href='/register'>
            Sign Up
          </Button>
        </div>
      </nav>
      <div className='landing-inner'>
        <h1>TrelloClone</h1>
        <p>
        Collaborate, manage projects,
          and reach new productivity peaks. From high rises to the home office,
          the way your team works is unique—accomplish it all with Trello.
        </p>
        <div className='buttons'>
          <Button variant='outlined' color='inherit' href='/register'>
            Start doing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;

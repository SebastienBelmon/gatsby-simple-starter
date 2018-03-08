import React from 'react';
import Link from 'gatsby-link';

const Index = ({ children }) => {
  return (
    <div css={{ margin: '3rem auto', maxWidth: 600 }}>
      <div
        css={{
          margin: '0 auto',
          maxWidth: 600,
        }}
      >
        <ul
          css={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <li css={{ float: 'left' }}>
            <Link to="/">
              <h3
                css={{
                  display: 'inline-bock',
                  margin: 0,
                  float: 'left',
                }}
              >
                This is my Gatsby test site
              </h3>
            </Link>
          </li>
          <li css={{ float: 'right' }}>
            <Link
              css={{
                float: 'right',
                marginRight: '10px',
              }}
              to="/page2"
            >
              Page2
            </Link>
          </li>
          <li css={{ float: 'right' }}>
            <Link
              css={{
                float: 'right',
                marginRight: '10px',
              }}
              to="/"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="main" >
        {children()}
      </div>
    </div>
  );
};

export default Index;

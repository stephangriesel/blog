import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/s.png'

const HeaderWrapper = styled.div`
  background: #FFF;
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  img {
    margin-bottom:0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1rem 2.5rem;
`

//  max-width: 1680px;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              width: '100px',
            }}
            src={logo}
            alt="Logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header

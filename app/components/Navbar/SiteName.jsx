import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

/* -----------------    STYLED COMPONENTS    ------------------ */
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  padding-left: 3rem;
  min-height: ${ props => props.theme.height ? props.theme.height + 'px' : '50px' };
  text-decoration: none;

  &:hover {
    color: #15317e;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 0;
    justify-content: center;
    min-height: 100%;
  }
`

/* -----------------    COMPONENT     ------------------ */
const SiteName = () => (
  <NavLink to="/">
    Climb Shopper
  </NavLink>
)

export default SiteName;

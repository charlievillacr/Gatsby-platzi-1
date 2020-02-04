import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from '../styles/components'
import LogoChardan from '../images/chardan_blanco.svg'
import LogoCarrito from '../images/shopping-cart-1.svg'
import LogoFace from '../images/facebook.svg'
import LogoInsta from '../images/instagram.svg'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to='/'>
      <img src={LogoChardan} alt='logoChardan'/>
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to='/'>Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <Link to='/'>
          <span><img src={LogoCarrito} alt='cartlogo' /></span>
          Carro de Compras</Link>
        </MenuItem>
        <MenuItem margin>
          <a href='https://www.facebook.com/chardanboutique/'><span><img src={LogoFace} alt='fblogo'/></span>Facebook</a>
        </MenuItem>
      <MenuItem>
          <a href='https://www.instagram.com/chardanboutique/'><span><img src={LogoInsta} alt='instalogo'/></span>Instagram</a>
        </MenuItem>  
      </ul>
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

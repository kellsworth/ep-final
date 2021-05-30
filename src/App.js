import { useState } from 'react';
import './App.css';
import etchitpro_logo from './assets/etchitpro_logo.png';
import Routes from "./routes";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router'


function App(props) {

  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {
    setToggle(!toggle) 
  }

  const logout = () => {
    axios.post('/api/auth/logout')
      .then(_ => {
        props.history.push('/')
        // this.props.logout()
      })
      .catch(err => console.log(err))
  }


  console.log(toggle)
  return (
    <div className="App">
      <title>Etchit Pro</title>
      <header className="body">
        <link rel="stylesheet" href="/App.css"></link>
        <meta className="viewport" content="width=device-width, initial-scale=1.0"/>
        <nav className="navbar">
          {/* <div className="brand-title">Etchit Pro</div> */}
            <h1 className='logo'>
              <a href="/"><img className='logo' src={etchitpro_logo} width="250" height="120" alt='etchitpro_logo' /></a></h1>
          <div onClick={toggleMenu} className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className= {toggle ? "navbar-links display" : "navbar-links"}>
            <ul>
              <Link to="/shop">
              <li><p id="links">Shop</p></li>
              </Link>
              <Link to="/contact">
                <li><p id="links">Contact</p></li>
              </Link>
              <Link to="/cart">
                <li><p id="links">Cart</p></li>
              </Link>
              <Link to="/" onClick={logout}>
                <li><p id="links">Logout</p></li>
              </Link>
            </ul>
          </div> 
        </nav>

      </header>

      <main>
        {Routes}
      </main>
      <footer class="footer"><p>2021 Etchit Pro | Karen Ellsworth</p></footer>
    </div>
  );
}

export default withRouter(App);

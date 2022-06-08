import { Link } from 'react-router-dom'


const Navbar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to='/'>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>Search Recipes<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/'>Somewhere Soon</Link>
      </li>
      {/* {<li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item">Action</Link>
          <Link className="dropdown-item">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item">Something else here</Link>
        </div>
      </li>} */}
      <li className="nav-item">
        <Link className="nav-link disabled" tabIndex="-1" aria-disabled="true" to='/'>Disabled</Link>
      </li>
    </ul>
  </div>
</nav>)
}
export default Navbar
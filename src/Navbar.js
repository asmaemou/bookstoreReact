function Navbar() {
  return (
    <nav>
        <label className="logo">Awesome Books</label>
        <ul>
                <li id="display-list"><a to="/" className="menu-item active" >List</a></li>
                <li id="display-add"><a to="/add"  className="menu-item" >Add List</a></li>
                <li id="diplay-contact"><a to="/contact"  className="menu-item">Contact</a></li>
            </ul>
    </nav>
  );
}

export default Navbar;
function Navbar() {
  return (
    <nav>
        <label className="logo">Awesome Books</label>
        <ul>
                <li id="display-list"><a id="list-link" className="menu-item active" >List</a></li>
                <li id="display-add"><a id="add-link" className="menu-item" >Add List</a></li>
                <li id="diplay-contact"><a id="contact-link" className="menu-item">Contact</a></li>
            </ul>
    </nav>
  );
}

export default Navbar;
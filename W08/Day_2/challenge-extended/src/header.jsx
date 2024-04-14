export function Header(props) {
  return (
    <header className="header">
      <h1>{props.blogTitle}</h1>
      <nav>
        <a href={props.home} className="nav-link">
          Home
        </a>
        <a href={props.about} className="nav-link">
          About
        </a>
        <a href={props.contact} className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
}

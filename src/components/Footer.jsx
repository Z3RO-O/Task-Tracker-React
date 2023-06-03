import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <p>Copyright <Link to=''>Z3RO-O</Link> &nbsp;&copy; 2023</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
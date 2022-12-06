import { Outlet, Link } from "react-router-dom";
import '../App.css';


const Layout = () => {
  return (
    <>
<nav class="navbar navbar-fixed-top navbar-expand-sm bg-light">
<div class="container-fluid">
<ul class="navbar-nav">
<li class="nav-item">
<Link class="nav-link" to="/">Journal</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/memories">Memories</Link>
</li>
</ul>
</div>
</nav>

<Outlet />
</>);
};

export default Layout;

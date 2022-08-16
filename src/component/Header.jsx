import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    SPA-App
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-down">
                    <li>
                        <a href="https://github.com/alexandr-229">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

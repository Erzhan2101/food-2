import {Link, useHistory} from "react-router-dom";
import {useState} from "react";

const Header = () => {

    const [search, setSearch] = useState('')
    const history = useHistory();

    const searchInput = (e) => {
        setSearch(e.target.value)
    }

    const btnSearch = () => {
        if (search.trim()) {
            history.push(`browse/${search}`)
        }
    }

    return (
        <div className='header'>
            <Link to={`/`}>
                <h1 className='header-title'>My own chef</h1>
            </Link>

            <div className="search-box">
                <Link className="header-home" to={`/`}>Home</Link>
                <input className='search-input' onKeyDown={e => {if(e.key === "Enter") btnSearch()}} onChange={searchInput} type='text' placeholder='Enter text'/>
                <button className='search-btn' onClick={btnSearch}>Search...</button>
            </div>
        </div>
    );
};

export default Header;
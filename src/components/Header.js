import React from 'react';
import companyLogo from './images/homeawesomelogo.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStateValue} from './StateProvider'

function Header() {
    const [{cart} ,dispatch] = useStateValue();
    return (
        <nav className='header'>
            <Link to={"/"}>
                <img 
                className='header_logo' 
                src={companyLogo} 
                alt=''
                height={50}
                width={100}
                />
            </Link>
            <div className='searchbar'>
                <input  type={'text'} className='header_searchBar'>
                </input>
                <SearchIcon className='searchicon'></SearchIcon>
            </div>
            <div className='header_nav'>
            <Link className='header_options' to={"/"}>
               <div>Home</div>
            </Link>
            <Link className='header_options' to={"/about"}>
               <div>About</div>
            </Link>
            <Link className='header_options' to={"/products"}>
               <div>Products</div>
            </Link>
            <Link className='header_options' to={"/sign_in"}>
               <div>Sign In</div>
            </Link>
            <Link className='header_options' to={"/checkout"}>
              <div className='header_basket'>
                 <ShoppingCartIcon/>
                 <span>{cart.length}</span>
              </div>
            </Link>
            </div>

        </nav>
    )
}

export default Header

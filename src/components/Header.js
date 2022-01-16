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
            <Link to={"/home-awesome/"}>
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
            <Link className='header_options' to={"/home-awesome/"}>
               <div>Home</div>
            </Link>
            <Link className='header_options' to={"/home-awesome/about"}>
               <div>About</div>
            </Link>
            <Link className='header_options' to={"/home-awesome/products"}>
               <div>Products</div>
            </Link>
            <Link className='header_options' to={"/home-awesome/sign_in"}>
               <div>Sign In</div>
            </Link>
            <Link className='header_options' to={"/home-awesome/checkout"}>
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

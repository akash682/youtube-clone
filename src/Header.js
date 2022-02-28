import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');


    return (
        <div className='header'>
            <div className='header_logo'>
                <MenuIcon />
                <Link to="/">
                    <img
                        className='header_logo' 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt=''
                    />
                </Link>
            </div>

            <div className='header_input'>
                <input 
                    onChange={(e) => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    text="text" 
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header_inputButton'/>
                </Link>
            </div>

            <div className='header_icons'>
                <VideoCallIcon className='header_icon'/>
                <AppsIcon className='header_icon'/>
                <NotificationsIcon className='header_icon'/>
                <Avatar 
                    alt='Akash Lohani'
                    src='https://media-exp1.licdn.com/dms/image/C4E03AQFQj04hA5rJYA/profile-displayphoto-shrink_200_200/0/1548177700214?e=1651708800&v=beta&t=ftv4G6D337HX9cABB9YbPPPHsopY46xnuQDbOyH1p2Q'
                />
            </div>
        </div>
    );
}

export default Header
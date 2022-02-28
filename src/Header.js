import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <MenuIcon />
                <img
                    className='header_logo' 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt=''
                />
            </div>

            <div className='header_input'>
                <input placeholder="Search" text="text" />
                <SearchIcon className='header_inputButton'/>
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
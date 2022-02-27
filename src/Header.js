import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className='header'>
            <MenuIcon />
            <img
                className='header_logo' 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                alt=''
            />
            <input text="text" />
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon/>
            <Avatar />
        </div>
    );
}

export default Header
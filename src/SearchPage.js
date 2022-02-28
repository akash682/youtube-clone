import React from 'react'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://us.123rf.com/450wm/deagreez/deagreez1910/deagreez191003864/146220059-copyspace-photo-of-cheerful-charming-trendy-cute-fascinating-girlfriend-pointing-at-something-smilin.jpg?ver=6"
                channel="Clever Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming data"
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPW3loKMi5gmhSwnOM6oX7eIqHlFdT45aNw&usqp=CAU"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://blog.malwarebytes.com/wp-content/uploads/2020/07/Google-building-scaled.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://miro.medium.com/max/800/1*2rylHFpxiifiah5PqmEl-w.png"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPW3loKMi5gmhSwnOM6oX7eIqHlFdT45aNw&usqp=CAU"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://blog.malwarebytes.com/wp-content/uploads/2020/07/Google-building-scaled.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://miro.medium.com/max/800/1*2rylHFpxiifiah5PqmEl-w.png"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPW3loKMi5gmhSwnOM6oX7eIqHlFdT45aNw&usqp=CAU"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://blog.malwarebytes.com/wp-content/uploads/2020/07/Google-building-scaled.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://miro.medium.com/max/800/1*2rylHFpxiifiah5PqmEl-w.png"
            />


        </div>
    )
}

export default SearchPage
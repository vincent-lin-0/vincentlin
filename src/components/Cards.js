import React from 'react'
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out some of my work!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src={require('../images/SnackMatch.png')}
                        text='SnackMatch: Tinder with Resturants, matching you and your indecisive friends to your new favorite restaurants'
                        label='React/MongoDB'
                        path='https://github.com/vincent-lin-0/SnackMatch'
                    />
                    <CardItem
                        src={require('../images/gitlet.png')}
                        text='Gitlet: A miniature version of the version-control system Git'
                        label='Java'
                    />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                        src={require('../images/enigma.png')}
                        text='Enigma: Simulating the Enigma Machine used during World War II to secretly transfer messages'
                        label='Java'
                    />
                    <CardItem
                        src={require('../images/website.png')}
                        text="Vincent's Personal Website: The one you are currently on :)"
                        label='React'
                        path='https://github.com/vincent-lin-0/vincentlin'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
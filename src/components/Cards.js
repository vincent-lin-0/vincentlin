import React from 'react'
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
  return (
    <div className='cards' id='projects'>
        <h1>PROJECTS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src={require('../images/SnackMatch.png')}
                        text='SnackMatch: Tinder with Resturants, matching you and your indecisive friends to your new favorite restaurants using the Yelp API'
                        label='React/MongoDB'
                        path='https://github.com/vincent-lin-0/SnackMatch'
                    />
                    <CardItem
                        src={require('../images/gitlet.png')}
                        text='Gitlet: A miniature version of the version-control system Git. Uses sha-1 and serialized files to ensure persistence'
                        label='Java'
                    />
                    <CardItem
                        src={require('../images/enigma.png')}
                        text='Enigma: Replicated WWII encryption machine that parses and tokenizes input with various permutations to encode and decode messages'
                        label='Java'
                    />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                        src={require('../images/ataxx.png')}
                        text='Ataxx: Recreated an aracade classic with a GUI. Implemented the AI player using game trees and alpha-beta pruning'
                        label='Java'
                    />
                    <CardItem
                        src={require('../images/ants.jpeg')}
                        text='Ants: Inspired by the popular game Plants Vs. Zombies. Combines functional and object-oriented programming'
                        label='Python'
                    />
                    <CardItem
                        src={require('../images/scheme.webp')}
                        text='Scheme Interpreter: An interpreter for the language Scheme. Tokenized through inputs and implemented with tail recursion'
                        label='Python'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src={require('../images/housing.jpeg')}
                        text='Housing Prices: Built a linear regression model that predicts the housing prices using feature engineering and cross validation'
                        label='Python, Sklearn, Pandas'
                    />
                    <CardItem
                        src={require('../images/autocorect.jpeg')}
                        text='Autocorrect: A program inspired by typeracer. Measures typing speed and implements autocorrect'
                        label='Python'
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
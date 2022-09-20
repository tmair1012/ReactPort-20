import React from 'react'

/*import pictures*/
import workDay from "../../assets/Profile/WorkDayScheduler.png";
import tipsy from "../../assets/Profile/Letsgettipsypic.png";
import rhythm from "../../assets/Profile/DailyRhythmPic.png";

function Project() {
   
    const myProjects = [
        {
            title: "Let's Get Tipsy",
            description: 'My first group project! A simple site using an API to choose a drink for you!',
            githubUrl:'https://github.com/gracielamorales/LetsGetTipsy',
            deployUrl:'https://gracielamorales.github.io/LetsGetTipsy/',
            picture:tipsy
        },
        {
            title: 'Daily Rhythm',
            description: 'My second group project! Using Twilio, get alerts from your phone to remind you of your life! (WIP)',
            githubUrl:'https://github.com/tmair1012/Daily_Rhythm',
            deployUrl:'https://daily-rhythm.herokuapp.com/',
            picture:rhythm
        },
        /* Not working
        {
            title: 'Find A Show! (WIP)',
            description: 'Final Project! Use the search finder after logging in to find detailed descriptions and info about your favorite tv shows!',
            githubUrl:'https://github.com/cclund444/P3FindAShow',
            deployUrl:'https://powerful-shore-59524.herokuapp.com/',
            picture:''
        },
        */
        {
            title: 'Work Day Scheduler',
            description: 'Schedule tasks on a workday scheduler! Color coordinated to show what is up and coming and what is past!',
            githubUrl:'https://github.com/tmair1012/Challenge-05-Work-Day-Scheduler',
            deployUrl:'https://tmair1012.github.io/Challenge-05-Work-Day-Scheduler/',
            picture:workDay
        },
        /* Works in Progress 
        {
            title: 'Social Network API',
            description: 'App to show my knowledge of backend mongoose routes! (Walk-through video)',
            githubUrl:'https://github.com/tmair1012/SNA-18',
            deployUrl:'https://www.youtube.com/watch?v=SIN2tn3yZOY',
            picture:''
        },
        {
            title: 'Object-Relational-Mapping',
            description: 'App to show my knowledge of backend mySQL routes! (Walk-through video)',
            githubUrl:'https://github.com/tmair1012/Challenge-13-ORM',
            deployUrl:'https://www.youtube.com/watch?v=lyGdyTEYWTA&t=1s',
            picture:''
        }
        */
    ];
    
    return(
        <div className='projects'>
            <h2>My Projects</h2>
        <div className='tipsy'>
        <img src={tipsy}></img>
        <div className='overLay'>
        <h2 className='tipsy-title'>Let's Get Tipsy</h2>
        <a href="https://gracielamorales.github.io/LetsGetTipsy/" className='hey2'>
        <i className="fas fa-laptop"></i>
        </a>
        <a href="https://github.com/gracielamorales/LetsGetTipsy" className='hey'>
        <i className="fab fa-github fa-1x"></i>
        </a>
        </div>
        </div>
        <div className='tipsy'>
        <img src={workDay}></img>
        <div className='overLay'>
        <h2 className='work-title'>Work Scheduler</h2>
        <a href="https://tmair1012.github.io/Challenge-05-Work-Day-Scheduler/" className='hey2'>
        <i className="fas fa-laptop"></i>
        </a>
        <a href="https://github.com/tmair1012/Challenge-05-Work-Day-Scheduler" className='hey'>
        <i className="fab fa-github fa-1x"></i>
        </a>
        </div>
        </div>
        <div className='tipsy'>
        <img src={rhythm}></img>
        <div className='overLay'>
        <h2 className='daily-title'>Daily Rhythm</h2>
        <a href="https://daily-rhythm.herokuapp.com/" className='hey2'>
        <i className="fas fa-laptop"></i>
        </a>
        <a href="https://github.com/tmair1012/Daily_Rhythm" className='hey'>
        <i className="fab fa-github fa-1x"></i>
        </a>
        </div>
        </div>
        </div>

    )
}

export default Project;
import React from 'react'

function Project() {
   
    const myProjects = [
        {
            title: "Let's Get Tipsy",
            description: 'My first group project! A simple site using an API to choose a drink for you!',
            githubUrl:'https://github.com/gracielamorales/LetsGetTipsy',
            picture:''
        },
        {
            title: 'Daily Rhythm',
            description: 'My second group project! Using Twilio, get alerts from your phone to remind you of your life! (WIP)',
            githubUrl:'https://github.com/tmair1012/Daily_Rhythm',
            picture:''
        },
        {
            title: 'Find A Show! (WIP)',
            description: 'Final Project! Use the search finder after logging in to find detailed descriptions and info about your favorite tv shows!',
            githubUrl:'https://github.com/cclund444/P3FindAShow',
            picture:''
        },
        {
            title: 'Work Day Scheduler',
            description: 'Schedule tasks on a workday scheduler! Color coordinated to show what is up and coming and what is past!',
            githubUrl:'https://github.com/tmair1012/Challenge-05-Work-Day-Scheduler',
            picture:''
        },
        {
            title: 'Social Network API',
            description: 'App to show my knowledge of backend mongoose routes!',
            githubUrl:'https://github.com/tmair1012/SNA-18',
            picture:''
        },
        {
            title: 'Object-Relational-Mapping',
            description: 'App to show my knowledge of backend mySQL routes!',
            githubUrl:'https://github.com/tmair1012/Challenge-13-ORM',
            picture:''
        }
    ];
    
    return(
        <div className='proj-title-section'>
           
        <div className='proj-div'>
        <h2>Projects</h2>
            {myProjects.map((proj) => (
        <div className='proj-section'>
            <ul className='proj-ul'>
            <li className='proj-list'>
                <div>
                <h2>{proj.title}</h2>
                <a href={proj.githubUrl} className='foot'>
        <i className="fab fa-github fa-1x"></i> </a>
                    <p>{proj.description}</p>
                </div>
            </li>
            </ul>    
        </div>
        ))}
        </div>
        </div>
    )
}

export default Project;
import React from 'react'

function Project() {

    const myProjects = [
        {
            title: "Let's Get Tipsy",
            description: 'My first group project! A simple site using an API to choose a drink for you!',
            url:'https://github.com/gracielamorales/LetsGetTipsy',
            picture:''
        },
        {
            title: 'Daily Rhythm',
            description: 'My second group project! Using Twilio, get alerts from your phone to remind you of your life! (WIP)',
            url:'https://github.com/tmair1012/Daily_Rhythm',
            picture:''
        },
        {
            title: 'Weather DashBoard',
            description: 'Using a weather API, select a city to see the current temperature and 5 day forecast!',
            url:'https://github.com/tmair1012/Challenge-06-Weather-Dashboard',
            picture:''
        },
        {
            title: 'Work Day Scheduler',
            description: 'Schedule tasks on a workday scheduler! Color coordinated to show what is up and coming and what is past!',
            url:'https://github.com/tmair1012/Challenge-05-Work-Day-Scheduler',
            picture:''
        },
        {
            title: 'Social Network API',
            description: 'App to show my knowledge of backend mongoose routes!',
            url:'https://github.com/tmair1012/SNA-18',
            picture:''
        },
        {
            title: 'Object-Relational-Mapping',
            description: 'App to show my knowledge of backend mySQL routes!',
            url:'https://github.com/tmair1012/Challenge-13-ORM',
            picture:''
        }
    ];
    console.log(myProjects);
    return(
        <div className='proj-div'>
            {myProjects.map((proj) => (
        <section className='proj-section'>
            <ul className='proj-ul'>
            <li className='proj-list'>
                <div>
                    <h2>{proj.title}</h2>
                    <p>{proj.url}</p>
                    <p>{proj.description}</p>
                </div>
            </li>
            </ul>    
        </section>
        ))}
        </div>
    )
}

export default Project;
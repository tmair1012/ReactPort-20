import React, {useState} from 'react';
import moxiePhoto from "../../assets/Profile/Moxie-professional.jpeg";
import socialPhoto from "../../assets/Profile/socialMePic.jpeg";
import jobPhoto from "../../assets/Profile/jobPic.jpeg";
import headPic from "../../assets/Profile/frontPagePic.jpg";



function Modal(props) {
    const videoGames = document.getElementsByClassName('.vidGames');
    const music = document.getElementsByClassName('.music')

    const [pict, selectPict] = useState({moxiePhoto});

    

    const select = () => {
        switch (pict) {
            case videoGames:
                return videoGames = true;
            case music:
                return <img src={jobPhoto}/>;
            case "Punk":
                return <img src={jobPhoto}/>;
            case "Alternative":
                return <img src={jobPhoto}/>;
            case "Animals":
                return <img src={jobPhoto} alt='job'/>;
        }
    }

    let picture;
   

    if (props.show && props.show == 1) {
        picture = jobPhoto;
    }
    if (props.show && props.show == 2) {
        picture = socialPhoto;
    }
    if (props.show && props.show == 3) {
        picture = moxiePhoto;
    }
    
    if(!props.show) {
        return null;
    }

return (
    <div className='modal'>
        <div className='modal-content'>
            <div className='modal-header'>
                <div className='modal-body'>
              <img src={picture}/>
                </div>
            </div>
        </div>
    </div>
)
}



export default Modal;
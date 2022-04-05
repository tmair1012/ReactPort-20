import React, {useState} from 'react';



function Modal(props) {

    const [currentPic, picChanger] = useState('Video Games')

    const selectPic = () => {
        switch (currentPic) {
            case "Video Games":
                return <p>videoGames</p>;
            case "Rock":
                return <p>Rock</p>
            case "Punk":
                return <p>Punk</p>
            case "Alternative":
                return <p>Alternative</p>
            case "Animals":
                return <p>Animal</p>
        }
    }

    if(!props.show) {
        return null;
    }

return (
    <div className='modal'>
        <div className='modal-content'>
            <div className='modal-header'>
                <div className='modal-body'>
                <p>{selectPic(currentPic)}</p>
                </div>
            </div>
        </div>
    </div>
)
}



export default Modal;
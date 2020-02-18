import React from 'react';
import logo from './logo.svg';
import './App.css';
import dog from './dog.jpg'
import dogm from './dog.mp3'

class Dog extends React.Component {

    audio = new Audio(dogm);
    onaddcounter = () => {
        if (this.props.index === this.props.randomIndex) {
            this.props.addcounter()
            this.audio.play()
        }
    }

    render = () => {
        debugger;
        let picture = (this.props.index === this.props.randomIndex)
            ? "photo show"
            : "photo"
        return (
            <div className="item" onClick={this.onaddcounter}>
                <img src={dog} className={picture}
                     index={this.props.index}
                     randomIndex={this.props.randomIndex}/>
                <audio src={dogm} type="audio/mp3"/>
            </div>
        );
    }
}

export default Dog;

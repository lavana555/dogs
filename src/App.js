import React from 'react';
import './App.css';
import Dog from "./dog";
// import Dog from './dog'
import dogm from './dog.mp3'

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    dogs = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    state = {
        //inrexstart:1,
        indexstart: 3,
        counter: 0,
    }

    componentDidMount() {
        setInterval(this.getRandomImageIndex, 1000)


    }

    getRandomImageIndex = () => {
        // this.setState({indexstart:Math.floor(Math.random() * 9)
        //  });
        this.setState({
            indexstart: Math.floor(Math.random() * 9)
        });
    }

    addcounter = () => {
        this.setState({
            counter: this.state.counter + 1

        })
    }


    render = () => {

        const dogsElements = this.dogs.map(dog => <Dog index={dog} randomIndex={this.state.indexstart}
                                                       addcounter={this.addcounter}/>)
        return (
            <div className="wrapper">

                {dogsElements}
                <div>{this.state.counter}</div>
                <audio src={dogm} type="audio/mp3"/>
            </div>
        );
    }
}

export default App;

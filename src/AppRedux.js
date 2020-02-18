import React from 'react';
import './App.css';
import Dog from "./dog";
// import Dog from './dog'
import dogm from './dog.mp3'
import {connect} from "react-redux";
import {ADD_COUNTER, onaddcounterAC, onRandomImageIndexAC, RANDOM_INDEX} from "./reducer";


class AppRedux extends React.Component {
    componentDidMount() {
        setInterval(this.getRandomImageIndex, 1000)
        // let GetRandomValue=setInterval(this.getRandomImageIndex, 1000)
        // this.props.onSetInterval(GetRandomValue)
    }

    getRandomImageIndex = () => {
        let newindexstart = Math.floor(Math.random() * 9);
        this.props.onRandomImageIndex(newindexstart)
    }
    addcounter = () => {
        let newcounter = this.props.counter + 1;
        this.props.onaddcounter(newcounter)
    }

    render = () => {
        const dogsElements = this.props.dogs.map(dog => <Dog index={dog}
                                                             randomIndex={this.props.indexstart}
                                                             addcounter={this.addcounter}/>)
        return (
            <div className="wrapper">
                {dogsElements}
                <div>{this.props.counter}</div>
                <audio src={dogm} type="audio/mp3"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        indexstart: state.indexstart,
        counter: state.counter,
        dogs: state.dogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onaddcounter: (newcounter) => {dispatch(onaddcounterAC(newcounter))},
        onRandomImageIndex: (newindexstart) => {  dispatch(onRandomImageIndexAC(newindexstart))},
        //onSetInterval:(GetRandomValue) => {  dispatch(onSetIntervalAC(GetRandomValue))}

        }
    }


const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(AppRedux)
export default ConnectApp;

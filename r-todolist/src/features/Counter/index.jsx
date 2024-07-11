import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {

    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);

    const handleIncreaseClick = () => {
        const action = increase() // action creator
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease() // action creator
        dispatch(action);
    }
    
    
    return (
        <div>
            Counter Form {counter}
            <div>
                <button onClick={handleIncreaseClick}>increase</button>
                <button onClick={handleDecreaseClick}>decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;
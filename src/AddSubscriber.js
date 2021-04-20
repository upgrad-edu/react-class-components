import React, {Component} from 'react';
import Header from './common/Header';

class AddSubscriber extends Component {
  render() {
    return (
        <div className="component-container">
            <Header heading="Add Subscriber"/>
            <div className="component-body-container">
                <button className="custom-btn">Back</button>
            </div>
        </div>
    )
  }
}

export default AddSubscriber;
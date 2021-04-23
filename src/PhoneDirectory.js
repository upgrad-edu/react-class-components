import React, { Component } from 'react';

class PhoneDirectory extends Component {
    constructor() {
        super();
     
        this.state = {
           subscribersList: []
        };
    }
    
    render() {
       return (
           <AddSubscriber />
       )
   }
}

export default PhoneDirectory;
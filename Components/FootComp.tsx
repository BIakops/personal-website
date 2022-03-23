import React, { Component } from 'react';

export default class FootComp extends Component {
    render() {
        return (
            <div className='relative'>
            <div className ="absolute align-bottom bottom-0 bg-gray-800 text-white p-4 text-center w-full">
               <p>Copyright &copy; {new Date().getFullYear()}</p>
            </div></div>
        );
    }
}
import React from 'react';
import '../../css/home.css';;

const Home = ({ setShowToast }) => {


    return (
        <div className='main-container'>
            <div className='left-container'>
                <h1>Title Here</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Adipiscing dolor id amet sit
                    sit posuere malesuada suspendisse.
                </p>

                <button
                    className='button'
                    onClick={() => {
                        setShowToast(true);
                        console.log('clicked');
                    }}
                >
                    Button
                </button>
            </div>
            <div className='right-container'>
                <div className='square'></div>
            </div>
        </div>
    );
};

export default Home;

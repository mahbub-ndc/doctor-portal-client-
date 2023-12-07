import React from 'react';
import hero from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className='w-1/2 relative'>
                        <img src={hero} className="max-w-lg rounded-lg shadow-2xl" />
                        <img src={parts} className="max-w-xs rounded-lg shadow-2xl absolute right-5 top-1/2" />
                    </div>
                    <div className='w-1/2 text-left'>
                        <h4 className='text-3xl '>About Us</h4>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
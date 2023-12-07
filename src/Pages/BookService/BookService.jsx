import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            title,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type':'application/json',

            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className='mb-10 text-2xl'>
            <h2>Service Name: {title}</h2>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="form-control">
                        <input type="text" placeholder="First Name" name='fname' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="date" placeholder="Date" className="input input-bordered" name = 'date' required />
                    </div>
                    <div className="form-control">
                        <input type="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name='due' defaultValue= {'$'+price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Confirm Order</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;
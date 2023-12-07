import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const deletedItem = confirm('Are you sure to delete the item?');
        if (deletedItem) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        alert('successfully deleted the data');
                        const remaining = bookings.filter(booking => booking._id!==id);
                        setBookings(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-3xl mb-6'>Total bookings:{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                      {
                        bookings.map(booking =><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
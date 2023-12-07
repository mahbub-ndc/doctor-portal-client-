import React from 'react';

const BookingRow = ({ booking, handleDelete }) => {
    const { _id, title, email, price, img, date } = booking;

   
    return (
        <div className='mb-10 text-center'>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{title}</td>
                <td>{email}</td>
                <td>{price}</td>
                <td>{date}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default BookingRow;
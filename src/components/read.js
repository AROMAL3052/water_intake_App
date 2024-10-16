import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteData, updateData } from '../UserReducer';
import BasicExample from './navbar';
import checkAuth from './mainAuth/checkAuth';

const Read = () => {
    const dispatch = useDispatch();
    const [b, setB] = useState(false);
    const [ids, setId] = useState();
    const [currentPage, setCurrentPage] = useState(1);  // Pagination state
    const itemsPerPage = 3;  // Set number of items per page

    const datas = useSelector((state) => state.data);
    const sdata = useSelector((state) => 
        state.data.find(user => user.id === ids)
    );
    
    const [date, setDate] = useState(sdata ? sdata.date : '');
    const [quantity, setQuantity] = useState(sdata ? sdata.quantity : '');

    const update = (event) => {
        event.preventDefault();
        dispatch(updateData({
            id: ids,
            newData: { date, quantity }
        }));
        setB(false);
        window.alert('Successfully updated');
    };

    // Pagination logic: Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page changes
    const handlePageChange = ( pageNumber ) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(datas.length / itemsPerPage);

    return (
        <div className="text-center">
            <BasicExample></BasicExample>

            {b && (
                <>
                    <h3 className="mt-5">Edit</h3>
                    <form onSubmit={update}>
                        <label>Date:</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <label>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <button type="submit">Update Data</button>
                    </form>
                </>
            )}

            <div className="p-5 m-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Intake</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((data, index) => (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.date}</td>
                                <td>{data.quantity} ml</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-warning ms-2"
                                        onClick={() => {
                                            setB(true);
                                            setId(data.id);
                                            setDate(data.date);
                                            setQuantity(data.quantity);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger ms-2"
                                        onClick={() => dispatch(deleteData(data.id))}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                Previous
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <li key={number} className={`page-item ${number === currentPage && 'active'}`}>
                                <button className="page-link" onClick={() => handlePageChange(number)}>
                                    {number}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default checkAuth(Read);

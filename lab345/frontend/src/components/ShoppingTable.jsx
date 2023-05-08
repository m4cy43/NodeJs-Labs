import React, { useState, useEffect } from 'react';
import '../css/ShoppingTable.css';

function ShoppingTable() {
    // const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // test data
    const [data, setData] = useState([
        { id: 1, name: "Milk", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 2, name: "Bread", category: "Groceries", price: 1.99, date: "2021-01-01" },
        { id: 3, name: "Eggs", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 4, name: "Butter", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 5, name: "Cheese", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 6, name: "Chicken", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 7, name: "Beef", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 8, name: "Pork", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 9, name: "Fish", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 10, name: "Shrimp", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 11, name: "Crab", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 12, name: "Lobster", category: "Groceries", price: 2.99, date: "2021-01-01" },
        { id: 13, name: "Shampoo", category: "Beaty supplies", price: 2.99, date: "2021-01-01" },
        { id: 14, name: "Conditioner", category: "Beaty supplies", price: 2.99, date: "2021-01-01" },
        { id: 15, name: "Soap", category: "Beaty supplies", price: 2.99, date: "2021-01-01" },
        { id: 16, name: "Toothpaste", category: "Beaty supplies", price: 2.99, date: "2021-01-01" },
        { id: 17, name: "Toothbrush", category: "Beaty supplies", price: 2.99, date: "2021-01-01" },
    ]);

    useEffect(() => { }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li key={number} onClick={() => setCurrentPage(number)}> {number} </li>
        );
    });

    return (
        <div id='shopping-table-content'>
            <div id="table-div">
                <table>
                    <thead>
                    <tr>
                        <th>Purchase</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map(item => (
                        <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        </div>
    );
}

export default ShoppingTable;

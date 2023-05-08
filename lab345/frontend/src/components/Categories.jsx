import React, { useState, useEffect } from 'react';
import AddCategory from './AddCategory';
import '../css/Categories.css';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    // const [purchases, setPurchases] = useState([]);

    // test data
    const [purchases, setPurchases] = useState([
        {
            id: 1,
            name: 'Bread',
            category: 'Food',
            price: 10,
            date: '2021-05-02'
        },
        {
            id: 2,
            name: 'Milk',
            category: 'Food',
            price: 20,
            date: '2021-05-02'
        },
        {
            id: 3,
            name: 'Butter',
            category: 'Food',
            price: 30,
            date: '2021-05-02'
        },
        {
            id: 4,
            name: 'Bread',
            category: 'Food',
            price: 10,
            date: '2021-05-02'
        },
        {
            id: 5,
            name: 'Milk',
            category: 'Food',
            price: 20,
            date: '2021-05-02'
        },
        {
            id: 6,
            name: 'T-Shirt',
            category: 'Clothes',
            price: 30,
            date: '2021-05-02'
        },
        {
            id: 7,
            name: 'Shoes',
            category: 'Clothes',
            price: 10,
            date: '2021-05-02'
        },
        {
            id: 8,
            name: 'Trousers',
            category: 'Clothes',
            price: 20,
            date: '2021-05-02'
        },
        {
            id: 9,
            name: 'Bread',
            category: 'Food',
            price: 10,
            date: '2021-05-02'
        },
        {
            id: 10,
            name: 'Milk',
            category: 'Food',
            price: 20,
            date: '2021-05-02'
        },
        {
            id: 11,
            name: 'Milk',
            category: 'Food',
            price: 20,
            date: '2021-05-02'
        },
        {
            id: 12,
            name: 'Milk',
            category: 'Food',
            price: 20,
            date: '2021-05-02'
        },
    ]);

    // отримати список категорій з апі і зберегти його в стані компонента
    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => setCategories(['All', ...data]));
        }, []
    );

    // отримати список покупок з апі і зберегти його в стані компонента
    useEffect(() => {
        fetch(`/api/purchases?category=${selectedCategory}`)
            .then(response => response.json())
            .then(data => setPurchases(data));
        }, [selectedCategory]
    );

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div id='categories-content'>
            <div className="options">
                <div className="dropdown">
                    <label htmlFor="category">Category: </label>
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                        {categories.map(category => <option key={category} value={category}>{category}</option>)}
                    </select>
                </div> 
                <div><AddCategory/></div>
            </div>
            <div className="table-div">
                <div className="table-block">
                    <table>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchases.map(purchase => (
                            <tr key={purchase.id}>
                                <td>{purchase.name}</td>
                                <td>{purchase.category}</td>
                                <td>{purchase.price}</td>
                                <td>{purchase.date}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Categories;

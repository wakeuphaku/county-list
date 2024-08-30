import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function List() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(err => setError('Ошибка'));
    }, []);

    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-5">
            <h1 className="fs-1 text-center">Список стран</h1>
            <ul className="list-group">
                {countries.map(country => (
                    <li key={country.cca3} className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to={`/country/${country.name.common}`} className="text-decoration-none">
                            {country.name.common}
                        </Link>
                        <span className="badge bg-info rounded-pill">{country.region}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;

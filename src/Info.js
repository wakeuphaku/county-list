import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Info() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => response.json())
            .then(data => setCountry(data[0]))
            .catch(() => setError('Ошибка'));
    }, [name]);

    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!country) return <div className="loading">Загрузка</div>;

    const languages = country.languages ? Object.values(country.languages).join(', ') : 'Пусто';

    return (
        <div className="container mt-5">
            <h1 className="fs-1 text-center">{country.name.common}</h1>
            <div className="d-flex justify-content-center mb-4">
                <img src={country.flags.svg} alt={`Флаг ${country.name.common}`} style={{ width: '200px' }} className="img-fluid" />
            </div>
            <div className="row row-cols-2 row-gap-3">
                <p className="col text-center"><strong>Столица:</strong> {country.capital}</p>
                <p className="col text-center"><strong>Регион:</strong> {country.region}</p>
                <p className="col text-center"><strong>Численность населения:</strong> {country.population.toLocaleString()}</p>
                <p className="col text-center"><strong>Язык:</strong> {languages}</p>
            </div>
        </div>
    );
}

export default Info;

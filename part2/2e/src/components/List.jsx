const List = ({ countries, showCountry }) => {
    return (
        <ul>
            {countries.map(country => (
                <li className="country" key={country.cca3}>
                    {country.name.common}

                    <button
                        onClick={() => showCountry(country.cca3)}
                    >
                        show
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default List
import './index.css'

const CountriesList = props => {
  const {countryDetails, updateVisitStatus} = props
  const {name, isVisited, id} = countryDetails

  const updateCountryVisitStatus = () => {
    updateVisitStatus(id)
  }

  return (
    <li className="list-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="btn-visited">Visited</p>
      ) : (
        <button
          type="button"
          onClick={updateCountryVisitStatus}
          className="btn-visit"
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList

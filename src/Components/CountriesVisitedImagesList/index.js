import './index.css'

const CountriesVisitedImagesList = props => {
  const {visitedCountry, removeVisitedCountry} = props
  const {name, imageUrl, id} = visitedCountry

  const updateVisitStatus = () => {
    removeVisitedCountry(id)
  }
  return (
    <li className="visited-list">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="sub-cont">
        <p className="visited-name">{name}</p>
        <button onClick={updateVisitStatus} type="button" className="btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountriesVisitedImagesList

import { DataContext } from '../app/Providers/DataProvider'
import { Link } from 'react-router-dom'
import { useContext } from 'react'


const RecipeDisplay = () => {
  const { recipe } = useContext(DataContext)
  return (
    <div className="card" style={{width: 18+"rem"}}>
      <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <Link to="/#" className="card-link">Card link</Link>
          <Link to="/#" className="card-link">Another link</Link>
        </div>
    </div>
  )
}

export default RecipeDisplay
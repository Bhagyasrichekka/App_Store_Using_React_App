// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="apps-item">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem

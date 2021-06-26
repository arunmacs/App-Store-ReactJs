import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="app-container">
      <img src={imageUrl} className="app-image" alt="app-pic" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem

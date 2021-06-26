import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="app-container">
      <div className="app-image-div">
        <img src={imageUrl} className="app-image" alt="app-pic" />
      </div>
      <h1 className="app-name">{appName}</h1>
    </li>
  )
}

export default AppItem

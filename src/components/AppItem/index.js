import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="app-container">
      <img src={imageUrl} className="app-image" alt="app-pic" />
      <p className="app-name">{appName}</p>
      <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
        <button type="button" className="install-btn">
          Install
        </button>
      </a>
    </li>
  )
}

export default AppItem

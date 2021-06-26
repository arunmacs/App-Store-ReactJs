import './index.css'

const TabItem = props => {
  const {tabDetails, onClickUpdate, activeTab} = props
  const {tabId, displayText} = tabDetails

  const onClickActiveTab = () => {
    onClickUpdate(tabId)
  }

  const isActive = activeTab === tabId

  const updateTabClass = isActive ? 'tab-item-active' : ''

  return (
    <li>
      <button
        className={`tab-item ${updateTabClass}`}
        onClick={onClickActiveTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

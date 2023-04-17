// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, changeTabItem, isActive} = props

  const {displayText, tabId} = eachTab
  const tabStyles = isActive ? 'btn' : ''

  const changeTab = () => {
    changeTabItem(tabId)
  }
  return (
    <li>
      <button className={tabStyles} type="button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const addClick = () => {
    console.log('Click')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={addClick} color='green' text='Add' />
    </header>
  )
}

Header.defaultProps = {
  title: "TaskTracker"
}

Header.propTypes = {
  title: PropTypes.string,
}
export default Header

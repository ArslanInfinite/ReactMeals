import epicMeal from '../../assets/EpicMeal.jpeg'
import classes from './Header.module.css'

const Header = props => {
  return (
    <>
    <header className={classes.header}> 
      <h1>ReactMeals</h1>
      <button>Cart</button>
    </header>
    <div className={classes=['main-image']}>
      <img src={epicMeal} alt='The funniest pic in human history'/>
    </div>
    </>
  )
}

export default Header 
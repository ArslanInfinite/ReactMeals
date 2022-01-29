import epicMeal from '../../assets/EpicMeal.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <>
      <header className={classes.header}> 
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>

      <div className={classes.mainImage}>
        <img src={epicMeal} alt='The funniest pic in human history'/>
      </div>
    </>
  )
}

export default Header 
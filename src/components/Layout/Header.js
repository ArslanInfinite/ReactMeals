import epicMeal from '../../assets/EpicMeal.jpg'

const Header = props => {
  return (
    <>
    <header>
      <h1>ReactMeals</h1>
      <button>Cart</button>
    </header>
    <div>
      <img src={epicMeal} alt='The funniest image in human history'/>
    </div>
    </>
  )
}

export default Header 
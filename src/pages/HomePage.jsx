import FormTrainer from "../components/HomePage/FormTrainer"
import './style/HomePage.css'

const HomePage = () => {
  return (
    <div className="container__home">
      <h1 className="container__title"><img src="./imagetitle.png" alt="" /></h1>
      <h2 className="container__title2">¡Hi trainer!</h2>
      <p className="container__p">To see the Pokemon's information, tell me you trainer name.</p>
      <FormTrainer/>  
      <footer className='footer'>
        <img className="footer__img" src="./footer.png" alt="" />
      </footer> 
    </div>
    
  )
}

export default HomePage

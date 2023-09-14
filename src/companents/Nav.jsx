import Search from '../images/Search.png'
import User from '../images/User.png'
import Shopping from '../images/Shopping.png'


function Nav () {
    return(
        <>
        <nav className=" navbar navbar-expand-lg " style={{backgroundColor:"#fff"}}>
  <div className="container-fluid">
    <a className=" Navbaslik navbar-brand" href="#">SoSo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className=" Navpad navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Daily health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Weight loss</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Skin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Hair</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <img src={Search} className='Search' alt="" />
    <img src={User} className='User' alt="" />
    <img src={Shopping} className='Shopping' alt="" />

  </div>
  <div className='Take'>
    <a className=" Taketext navbar-brand" href="#" style={{color:"#fff"}}>Take a quiz</a>
  </div>
  

    
</nav>

        </>
    )
}

export default Nav
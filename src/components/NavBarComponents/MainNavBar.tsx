
import { AiOutlineBars } from "react-icons/ai";
import { Link } from 'react-router-dom';

function MainNavBar() {
  return (
    <>
      <div className='.navbar'>
        <AiOutlineBars />
        <Link to='/upload' className='menu-bars'>
          
        </Link>
          
      </div>
    </>

    

  )
}

export default MainNavBar
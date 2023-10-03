import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout} = useLogout()
  const {user} = useAuthContext();

  const handleClick= () =>{
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3 className='ms-md-4'>Workout Buddy</h3>
        </Link>
        <div className='links d-flex gap-3 me-3 '>
          {user && (
            <div className='d-flex gap-3 align-items-baseline'>
            {user.email}
            <button className='btn btn-outline-success' onClick={handleClick}>Logout</button>
            </div>
            )
          }
           {!user && (
            <div className='d-flex gap-3'>
          <Link to="/signup">
            <h6>Signup</h6>

          </Link>
          <Link to="/login">
            <h6>Login</h6>
          </Link>
          </div>
           )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
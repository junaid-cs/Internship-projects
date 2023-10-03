import React, { useState } from 'react'
import { useSignup} from '../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const {signup, isLoading, error} = useSignup()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signup(email,password);
  }
  return (
    <div className='container ' >
      <div className="row align-items-center" style={{ minHeight: '80vh' }}>
        <div className="col-12 col-sm-10 col-md-6 col-lg-5 mx-auto">
          <div className="card p-5">
            <h2 className='mb-5 text-center text-success'>Signup</h2>
            <form  onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control"
                  onChange={(e) => { setEmail(e.target.value) }}
                  value={email}
                  id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="exampleInputPassword1" />
              </div>
              <button disabled={isLoading} type="submit" className="btn btn-success text-center d-block mx-auto w-50 mt-2 ">Submit</button>
              {error && <div className='error'>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
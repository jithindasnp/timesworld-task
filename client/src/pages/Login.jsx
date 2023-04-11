import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section className="vh-100 ">
            <div className="container py-5 h-100 mt-5">
                <div className="row justify-content-center h-100">
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <div className="row px-3">
                            <h1 className='fw-bold'>Sign In</h1>
                        </div>
                        <div className="row mt-2 px-3">
                            <div className="col-12 d-flex">
                                <p className='fw-bold me-3'>New User? </p>
                                <Link style={{textDecoration:"none"}}>Create an account?</Link>
                            </div>
                        </div>
                        <form className='form form-sign-in px-3'>
                            <div className="form-outline mt-2">
                                <input type="email" id="form1Example13" className="form-control form-control-lg" placeholder='User name or email' />
                                <label className="form-label" htmlFor="form1Example13"></label>
                            </div>

                            <div className="form-outline ">
                                <input type="password" id="form1Example23" className="form-control form-control-lg" placeholder='password' />
                                <label className="form-label" htmlFor="form1Example23" ></label>
                            </div>

                            <div className="form-check d-flex align-items-center mb-3 ">
                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked />
                                <label className="form-check-label px-2 mt-1" htmlFor="form1Example3">Keep me signed in</label>
                            </div>

                            <div class="d-grid gap-2 ">

                                <button class="btn btn-dark" type="button" > <Link to='/home' className="nav-link active" >SIGN IN</Link></button>
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR Sign In With</p>
                            </div>
                            <div className="row justify-content-center">
                               <div className="col-sm-2 col-3  mt-3"><img src="/assets/images/google.png" alt="" /></div>
                               <div className="col-sm-2 col-3  mt-3"><img src="/assets/images/facebook.png" alt="" /></div>
                               <div className="col-sm-2 col-3  mt-3"><img src="/assets/images/linkedin.png" alt="" /></div>
                               <div className="col-sm-2 col-3  mt-3"><img src="/assets/images/twitter.png" alt="" /></div>

                            </div>
                        </form>
                    </div>
                    <div className="col mb-5 ms-5 imageCol">
                        <img src='/assets/images/illustration.png' className="logoImg mb-5 px-3" alt="Phone image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="bg-none text-center text-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-1 col-2  mt-3"><img src="/assets/images/google.png" alt="" /></div>
                    <div className="col-md-1 col-2  mt-3"><img src="/assets/images/facebook.png" alt="" /></div>
                    <div className="col-md-1 col-2  mt-3"><img src="/assets/images/linkedin.png" alt="" /></div>
                    <div className="col-md-1 col-2  mt-3"><img src="/assets/images/twitter.png" alt="" /></div>
                </div>
                <div className="text-center mt-5" >
                    <p>Example@gmail.com</p>
                </div>
                <div className="text-center mt-2 mb-2">
                    Copyright © 2020 Name. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

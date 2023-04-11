import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

export default function Europe() {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/region/europe').then((result) => {
            console.log(result.data);
            setdata(result.data)
        }).catch(error => {
            console.error("CATCH", error);
        });

    }, []);
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">

                    {Array.isArray(data) && data.map((flagData) =>
                        <div className="col-sm-6 col-12">
                            <div className="card mb-3 me-2 " style={{ maxWidth: '610px' }}>
                                <div className="row p-3">
                                    <div className=" col">
                                        <img src={flagData.flags.png}  width={200} height={150} alt="..." />
                                    </div>
                                    <div className="col">
                                        <div className="card-body p-1 mt-3">
                                            <h5 className="card-title">{flagData.name.common}</h5>
                                            <p className="card-text">{flagData.region}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </>
    )
}

import React from "react";
import img from "../img/Mysore10.jpg"
import Card from "../component/Card"
import img1 from "../img/Mysore1.jpg"
import img2 from "../img/Mysore2.jpg"
import img3 from "../img/Mysore3.jpg"

const Destination=()=>{

    return(
        <>
        <div className="row">
            <div className="col-lg-11 col-md-11 col-sm-11 mx-auto">
            <img src={img} className="img-fluid w-100" style={{height:"60vh"}} alt="#"></img>
            </div>
        </div>
        <div className="row">
            
                <Card img={img1}/>
                <Card img={img2}/>
                <Card img={img3}/>
        </div>
        <div className="row">
            
                <Card img={img1}/>
                <Card img={img2}/>
                <Card img={img3}/>
        </div>
        <div className="row">
            
                <Card img={img1}/>
                <Card img={img2}/>
                <Card img={img3}/>
        </div>
        </>
    )
}

export default Destination;
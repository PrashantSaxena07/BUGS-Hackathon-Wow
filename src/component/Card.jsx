import React from "react"


const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 my-5 d-flex justify-content-center align-items-center">
            <div class="card" style={{width:"18rem"}}>
                <img src={props.img} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )

}

export default Card;
import profile from "./assets/kevin.webp"


function Card(){
    return (
        <div className="card">
            <img src={profile} alt="kevin profile" width="300px" className="card-image"/>
            <h2 className="card-title">Kevin Mitnick</h2>
            <p className="card-text">My favorite fellow hacker and mentor beloved Kevin</p>

        </div>
        
    )
}

export default Card
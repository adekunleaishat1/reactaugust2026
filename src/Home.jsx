import { BsAlipay } from "react-icons/bs"
import { FaAirbnb } from "react-icons/fa"
import { FaAddressBook, FaAffiliatetheme } from "react-icons/fa6"
import hero from "./assets/hero.png"

function Home() {
    const mystyle ={
        color:"Red",
        fontSize:"50px",
        fontFamily:"Roboto"
    }
    const username = "shayo"
    return <div>
     <h1 className="hi"> hello welcome to your react app {Math.random()}</h1>
     <button className="btn btn-dark">Bootstrap button</button>
     <p style={{color:"blue", backgroundColor:"black", fontSize:"70px",fontWeight:"bold"}}>Inline styling</p>
     <p style={mystyle}>Internal styling</p>
     <FaAddressBook/>
     <FaAffiliatetheme/>
     <BsAlipay size={20}/>
     <img src={hero} alt="" />
     <p>{username}</p>
    </div>
}

export default Home
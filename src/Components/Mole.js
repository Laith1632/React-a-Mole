import { useEffect } from "react";
import moleImage from '../mole.png'

const Mole = (props) => {
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '20vh'}} src={moleImage} onClick={props.handleClick} />
        </div>
    )
}

export default Mole
import { useEffect } from "react";
import MoleHill from '../molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot
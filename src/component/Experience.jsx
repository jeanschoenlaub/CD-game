import Lights from './Lights'
import { Level1 } from './Level1/Level1'

export default function Experience()
{

    //const phase = useGame(state => state.phase)
    //  {phase == "ready" && <Menu/>}

    return (
        <>
            <color args={ [ '#bdedfc' ] } attach="background" />
            <Lights />

            <Level1/> 
        </>
    )
}
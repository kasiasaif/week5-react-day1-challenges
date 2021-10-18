import Tile from './Tile'
import img1 from '../images/outdoor.jpeg'
import img2 from '../images/unique.jpeg'
import img3 from '../images/entire.jpeg'
import img4 from '../images/pet.jpeg'
const Carousel=(props)=>{
    return (
        <div className="row1">
        <Tile tileImage={img1} title="Outdoor getaways"/>
        <Tile tileImage={img2} title="Unique stays"/>
        <Tile tileImage={img3} title="Entire homes"/>
        <Tile tileImage={img4} title="Pets allowed"/>
        </div>
    )
}


export default Carousel
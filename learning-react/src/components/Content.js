import Single from './Single'
import img1 from '../images/bojo.jpg'
import img2 from '../images/climate.jpg'
import img3 from '../images/norway.jpg'
import img4 from '../images/summit.jpg'
import img5 from '../images/smart.jpeg'
const Content=(props)=>{
    return (
        <div className="row">
          <Single singleImage={img1} title="Six ways the UK could tackle climate change"/>
          <Single singleImage={img2} title="Why does a climate a summit need 25,000 people?"/>
          <Single singleImage={img3} title="Can you stop Norway drilling the oil that made it rich"/>
          <Single singleImage={img4} title="What the COP26 climate summit could mean for us all"/>
          <Single singleImage={img5} title="How  smart applicances can help fix the energy gap"/>
        </div>
    )
}


export default Content
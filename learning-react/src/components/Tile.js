const Tile=(props)=>{
    return(
        <div className="line1">
            <img className="images1"src={props.tileImage}/>
            <p className="text1">{props.title}</p>
        </div>
    )
}

export default Tile
const Single=(props)=>{
    return(
        <div className="line">
            <img  className="images" src={props.singleImage}/>
            <p className="text" >{props.title}</p>
        </div>
    )
}

export default Single
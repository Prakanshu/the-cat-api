function Breed(props){

    return(
        <div>
           <div className="row">
            <br></br>
            <div className="col-md-6" style={{fontSize:"x-large"}}>{props.type.name}</div>
            <div className="col-md-3"><img src={props.type.img} style={{height:"120px", width:"120px"}} ></img></div>
            </div> 
        </div>
    );
}

export default Breed;
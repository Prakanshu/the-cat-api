import { useEffect, useState } from "react";
import axios from 'axios';
import Breed from "./Breed";
import endpoint  from "../endpoints/endpoint";
import app_constants from "../constants/constants";



const config = {
    headers: {
        "x-api-key": app_constants["cat-api-key"]
    }
};

function BreedList() {

    const [listBreeds, setListBreeds] = useState([])
    useEffect(() => {
        axios.get(endpoint.breed_list, config)
            .then(res => {
                var breedsDetails=res.data;
                var results=[];
                breedsDetails.map((breed)=>{
                    var request={};
                    request.name=breed.name;
                    var image_details=breed.image;
                    if(image_details!== undefined){
                        console.log(image_details.url);
                        request.img=image_details.url;
                    }
                        
                    request.id=breed.id;
                    results.push(request);
                })
                setListBreeds(results)}).catch(err => console.log(err))
    }, [])

    return (
        <div style={{ marginTop: "4%", marginLeft: "5%", fontSize: "xx-large" }}>

            Cat Breeds
            
            <div className="row" style={{marginTop:"2%"}}>
                <div className="col-md-12">
                    { listBreeds.map(breed =>  <Breed type={breed} key={breed.id}></Breed>)}
                </div>
            </div>
        </div>
    )
}

export default BreedList;
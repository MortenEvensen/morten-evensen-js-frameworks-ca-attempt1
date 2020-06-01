import React, { useState, useEffect } from "react"
import { BASE_URL } from "../Constants/Constants"
import Search from "../Search/Search"


function Api() {
    const [ apiData, SetApiData ] = useState([]);
    const [ filteredApiData, SetFilteredApiData ] = useState([])

 
    useEffect(function() {
        fetch(BASE_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            SetApiData(json.results)
            SetFilteredApiData(json.results)

        })
        .catch(function(error) {
            console.log(error)
        })
    }, []);
    
    const filterItems = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = apiData.filter(function(item) {
            const lowerCaseName = item.name.toLowerCase() 
            
            if (lowerCaseName.includes(searchValue)) {
                return true;
            }
        });
        SetFilteredApiData(filteredArray);
    }

    
    return (
        <>
            <Search handleSearch={filterItems} />
            {filteredApiData.map(function(list) {
                const { name, rating, released, background_image } = list; 
                return (
                    <div className="wrap">
                        <h3>Title: {name}</h3>
                        <p>Rating: {rating}</p>
                        <p>Release date: {released}</p>
                        <img className="image" src={background_image} alt={name}/>
                    </div>
                )
            })}
        </>
    )
}

export default Api;
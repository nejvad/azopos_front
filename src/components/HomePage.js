import React, { useEffect, useState } from 'react'

const HomePage = () => {
const [values, setValues] = useState([]);

useEffect(() => {
    fetch("https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json")
    .then((res) => {
        res.json()
    })
    .then((data) => {
        console.log(data);
        setValues(data);
    })
})

 return (
    <div></div>
 )
}

export default HomePage;
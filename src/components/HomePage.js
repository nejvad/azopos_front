import React, { useEffect, useState } from 'react'

const HomePage = () => {
const [alkotas, setAlkotas] = useState([]);

useEffect(() => {
    fetch("https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json")
    .then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        setAlkotas(data);
    })
}, []);

 return (
    <div>
        {alkotas.map((value) => (
            <div key={value.alkotasAzonosito}>{value.nev}
                <p>{value.megjelenitendoNev}</p>
                <div>
                    <span>{value.tipus}</span>
                    <span>{value.keletkezesIdopontjaInt}</span>
                </div>
            </div>
        ))}
    </div>
 )
}

export default HomePage;
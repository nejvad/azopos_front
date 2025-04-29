import React, { useEffect, useState } from 'react'

const HomePage = () => {
const [alkotasok, setAlkotasok] = useState([]);

useEffect(() => {
    fetch("https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json")
    .then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        setAlkotasok(data);
    })
}, []);

 return (
    <div>
        {alkotasok.map((alkotas) => (
            <div key={alkotas.alkotasAzonosito}>{alkotas.nev}
                <p>{alkotas.megjelenitendoNev}</p>
                <div>
                    <span>{alkotas.tipus}</span>
                    <span>{alkotas.keletkezesIdopontjaInt}</span>
                </div>
            </div>
        ))}
    </div>
 )
}

export default HomePage;
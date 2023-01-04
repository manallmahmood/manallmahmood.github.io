import * as React from 'react'

const wineImage = {
    width: '10rem'
}

export default function Page1() {

    /**
     * 1. Fetch from https://api.sampleapis.com/wines/reds
     * 2. Trsnsform into JSX 
     */

    let items = []
    let [wineTitles, setWineTitles] = React.useState([])
    // Run once after the page finished loading
    React.useEffect(async() => {
        // This function will be run once
        // Fetch from https://api.sampleapis.com/wines/reds
        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wines = await res.json()

        for(let i = 0; i<wines.length; i++) {
            console.log(wines[i].winery)
            items.push(<li>
                <div style={{width:"40rem", overflow: "hidden"}}>
                    <div style={{width:"11rem", float: "left"}}> <img style={wineImage} src={wines[i].image}/></div>
                    <div><b>{wines[i].wine}</b> - {wines[i].winery}</div>
                </div>
            </li>)
        }

        setWineTitles(items)
    }, [])
    return (
        <>
            <h1>Wines</h1>

            <ul>
                {wineTitles}
            </ul>
        </>
    )
}

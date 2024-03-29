import * as React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../components/WineCard';
import { useLocalStorage } from 'react-use';
const dummyPrice = 59
function PosPage() {
    let [wineTitles, setWineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')
    let [cart, setCart] = useLocalStorage('cart', [])
    const checkout = typeof window !== 'undefined' ? localStorage.clear() : null    
    function addToCard(wine) {
        cart.push(wine)
        console.table(cart)
        setCart([...cart])
    }
    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    items.push(
                        <WineCard                            key={i}
                            image={wines[i].image}
                            title={wines[i].wine}
                            price={dummyPrice}
                            handleClick={() => { addToCard(wines[i]) }}
                        />                    )                }
                setWineTitles(items)
            })
    }, [subMenu])
return   <Container>
        <h1>Wine Shop</h1>
        <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => { setSubMenu('reds') }}>Red Wine</Button>
        <Button variant="secondary" onClick={() => { setSubMenu('whites') }}>Whites Wine</Button>
        </ButtonGroup>
        <Row>
            <Col>
            <Row>
                {wineTitles}
                </Row>
                </Col>
                <Col sm={3}>
                <h2>Cart </h2>
                {cart.map((item, i) => {
                        return <Row key={i}>
                            <Col>{item.winery}</Col>
                            <Col>{dummyPrice}</Col></Row> })}                
                <Row>
                    Total: {cart.length * dummyPrice} Baht                
                    </Row>
                    </Col>
                    </Row>
                    </Container >}
                    export default PosPage
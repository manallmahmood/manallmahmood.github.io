// define data in JSON array
var products = [
    {
        name: "CocaCola",
        quantity: 3,
        ppu: 25
    },
    {
        name: "Popcorn",
        quantity: 2,
        ppu: 190
    },
    {
        name: "Sprite",
        quantity: 1,
        ppu: 25
    },
    {
        name: "KitKat",
        quantity: 2,
        ppu: 30
    }
]

function loadData() {
    let elem = document.getElementById("myName")
    elem.innerHTML = "Manal Mahmood"

    let productList = document.getElementById("productList")
    let sum = 0
    for (let p in products) {
        let row = document.createElement("tr")
        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text-right")

        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text-right")

        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity 
        total.classList.add("text-right")
        sum = sum + (products[p].ppu * products[p].quantity )

        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }

    let gross = document.getElementById("gross")
    gross.innerHTML = 99999


}
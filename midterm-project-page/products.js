// define data in JSON array
var products = [
    {
        name: "CocaCola",
        quantity: 3,
        ppu: 25,
        discount: 0
    },
    {
        name: "Popcorn",
        quantity: 2,
        ppu: 190,
        discount: 0
    },
    {
        name: "Sprite",
        quantity: 1,
        ppu: 25,
        discount: 0
    },
    {
        name: "KitKat",
        quantity: 2,
        ppu: 30,
        discount: 0
    }
]
// This function will pick the value from the <selet>
// and add to the table
function addToCart() {
    let newname= (document.getElementById("exampleFormControlInput1")).value
    console.log(newname)

    let newproducts = {
        name: $('#exampleFormControlInput1').val(),
        quantity: $('#exampleFormControlInput2').val(),
        ppu: $('#exampleFormControlInput3').val(),
        discount: $('#exampleFormControlInput4').val() || 0 
        }
        if(!newproducts.discount)
            delete newproducts.discount;

    products.push(newproducts)
    console.log(products)

    let newData =  `<tr>
    <td><img style="width: 0.5px; height: 0.5px;" src='icon-delete.png" onclick='deleteProduct("${(products.length)-1}")'>${newproducts.name}</td>
    <td>${newproducts.quantity}</td>
    <td>${newproducts.ppu}</td>
    <td>${newproducts.discount}</td>
    </tr>`

    $("#productBody tr:last").after(newData)
    $('#exampleModal').modal('hide');
    loadData()
   

}
    
// Clear existing items in the table
function clearAll() {
    products = []
    $("#productBody").empty();
    document.getElementById("gross").innerHTML = ""
    document.getElementById("vat").innerHTML = ""
    document.getElementById("net").innerHTML = ""
    loadData()
    $('#productBody').html("")
    
}

// TODO Should use product ID instead of name
function deleteProduct(index) {
    console.log("DELETE",index)
    if(products[index].quantity > 1){
        products[index].quantity --;
    }else{
        products.splice(index,1);  // remove the element from array
    }
    $('#productBody').html("")
    loadData()
}

function loadData() {
    let allRows = "";
    let gross = 0;
    let totalDiscount = 0;
    for (let p in products) {
        let cellname = `<td><img class='icon' src='icon-delete.png' style="width: 25px; height: 30px;"  onclick='deleteProduct(${p})'> ` + products[p].name + "</td>";
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>";
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>";
        let initialtotal = products[p].ppu * products[p].quantity;
        let total = initialtotal;
        if (products[p].discount){
            totalDiscount += products[p].discount;
            total = total - products[p].discount;
        }
        gross += total;
        let cellTotal = '<td class="text-right">' + total + "</td>";
        let row = `<tr>${cellname}${cellQuantity}${cellPPU}${cellTotal}<td class="text-right">${products[p].discount || 0}</td></tr>`;
        allRows += row;
    }
    $('#productBody').html(allRows);
    document.getElementById("discount").innerHTML = totalDiscount.toFixed(2);
    document.getElementById("gross").innerHTML = gross.toFixed(2);
    document.getElementById("vat").innerHTML = (gross * 0.12).toFixed(2);
    document.getElementById("net").innerHTML = (gross * 1.12).toFixed(2);

}




function loadDataOld() {

    // $('#productBody').html('<tr><td>xxx</td><td>xxx</td><td>xxx</td><td>xxx</td></tr>')
    
    let productList = document.getElementById("productList")
    let gross = 0
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
        gross += products[p].ppu * products[p].quantity

        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }

    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vat = gross * 0.07
    let net = gross + vat
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)

}






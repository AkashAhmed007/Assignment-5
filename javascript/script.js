const seatNames = document.getElementsByClassName("seat-name");
let count = 40;
let seatSeleted = 0;
let price = 550;
let grandTotal = 0;
for(const seatName of seatNames){
    seatName.addEventListener('click',function(){
        seatName.classList.add('bg-[#1dd100]');
        count -= 1;
        document.getElementById('seats-left').innerText = count;
        seatSeleted += 1;

        const selectedSeat = document.getElementById('seat-selected');
        selectedSeat.classList.add('bg-[#1dd100]','p-1');
        selectedSeat.innerText = seatSeleted;

        const nameOfSeat = seatName.innerText;
        const tableBody = document.getElementById('table-body');
        const tableRow = document.createElement('tr');
        const tableData1 = document.createElement('td');
        const tableData2 = document.createElement('td');
        const tableData3 = document.createElement('td');

        tableData1.innerText = nameOfSeat;
        tableData2.innerText = 'Economy';
        tableData3.innerText = price;

        tableRow.append(tableData1);
        tableRow.append(tableData2);
        tableRow.append(tableData3);
        tableBody.appendChild(tableRow);

        const totalPrice = document.getElementById('total-price');
        const convertedTotalPrice = parseInt(totalPrice.innerText);
        totalPrice.innerText = convertedTotalPrice + price
        const grandTotal = document.getElementById('grand-total');
        const convertedGrandTotal = parseInt(grandTotal.innerText);
        grandTotal.innerText = convertedGrandTotal + price;
    }) 
}

const inputValue = document.getElementById('input-value');
const cuponApply = document.getElementById('apply');
grandTotal = document.getElementById('grand-total').innerText;

cuponApply.addEventListener('click',function(){
    const inputCupon = inputValue.value;
    if(inputCupon === "NEW15"){
        console.log("You got 15% discount!")
       
    }else if(inputCupon === "Couple 20"){
        console.log("You got 20% discount!!!")
    }
    else{
        console.log("sorry you dont get any discount")
    }
})


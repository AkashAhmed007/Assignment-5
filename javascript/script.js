const seatNames = document.getElementsByClassName("seat-name");
let count = 40;
let seatSelected = 0;
let price = 550;
let grandTotal = 0;
for(const seatName of seatNames){
    seatName.addEventListener('click',function(){
    seatName.classList.add('bg-[#1dd100]');
    count -= 1;
    document.getElementById('seats-left').innerText = count;
    seatSelected += 1;
    const selectedSeat = document.getElementById('seat-selected');
    selectedSeat.classList.add('bg-[#1dd100]','p-1','border-1','rounded-xl');
    selectedSeat.innerText = seatSelected;

    if(parseInt(seatSelected) === 4){
        document.getElementById('input-value').disabled = false;
    }
    else{
        if(parseInt(seatSelected) > 4){
            const showSeat = document.getElementById('show-seat');
            showSeat.innerText = 'You can buy maximum 4 tickets';
            seatName.classList.add('bg-[#FF0000]');
            document.getElementById('input-value').disabled = true;
            tableBody.appendChild('');
        }
    }   
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
const cuponApply = document.getElementById('apply');
cuponApply.addEventListener('click',function(){
    const inputValue = document.getElementById('input-value');
    const inputCupon = inputValue.value;

    if(inputCupon === "NEW15"){
        const discount = document.getElementById('discount');
        discount.innerText = "Grand Total With Discount:";
        const grandTotal = document.getElementById('grand-total');
        const convertedGrandTotal = parseInt(grandTotal.innerText);
        grandTotal.innerText = convertedGrandTotal - convertedGrandTotal * 0.15;
        inputValue.classList.add('hidden');
        cuponApply.classList.add('hidden');

    }else if(inputCupon === "Couple 20"){
        const discount = document.getElementById('discount');
        discount.innerText = "Grand Total With Discount:";
        const grandTotal = document.getElementById('grand-total');
        const convertedGrandTotal = parseInt(grandTotal.innerText);
        grandTotal.innerText = convertedGrandTotal - convertedGrandTotal * 0.20;
        inputValue.classList.add('hidden');
        cuponApply.classList.add('hidden');
    }
    else{
        alert("Please give the discount code");  
    }
})

const nextBtn = document.getElementById("next-btn");
const modal =document.getElementById('modal');
const continueBtn = document.getElementById('continue-btn');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

nextBtn.addEventListener('click',function(){
    modal.classList.remove('hidden');
    header.classList.add('hidden');
    main.classList.add('hidden');
    footer.classList.add('hidden');
})
continueBtn.addEventListener('click', function(){
    modal.classList.add('hidden');
    header.classList.remove('hidden');
    main.classList.remove('hidden');
    footer.classList.remove('hidden');  
})
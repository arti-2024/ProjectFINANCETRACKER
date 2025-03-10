let expenses=[];
let totalAmount=0;

const  categoryselect=document.getElementById('category-select')
const  amountInput=document.getElementById('amount-input')
const  dateInput=document.getElementById('date-input')
const  addBtn=document.getElementById('add-btn')
const  expenseTableBody=document.getElementById('expense-table-body')
const  totalAmountCell=document.getElementById('total-amount')

addBtn.addEventListener('click',function(){
    const category=categoryselect.value;
    const amount=Number(amountInput.value);
    const date=dateInput.value;

    if(category === ''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount)|| amount<=0){
        alert('please enter a valid amount');
        return;
    }
    if(date===''){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,date})

    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow= expenseTableBody.insertRow();

    const categoryCell= newRow.insertCell();
    const AmountCell= newRow.insertCell();
    const dateCell= newRow.insertCell();
    const deleteCell= newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete.btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1);

        totalAmount-=expense.amount;
        totalAmountCell.textContent=totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense=expenses[expenses.length-1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
});
for(const expense of expenses){
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow= expenseTableBody.insertRow();

    const categoryCell= newRow.insertCell();
    const AmountCell= newRow.insertCell();
    const dateCell= newRow.insertCell();
    const deleteCell= newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete.btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1);

        totalAmount-=expenses.amount;
        totalAmountCell.textContent=totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense=expenses(expenses.length-1);
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

}
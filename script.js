let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction() {
  const text = document.getElementById('text').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (!text || isNaN(amount)) return alert("Enter valid data");

  const transaction = { id: Date.now(), text, amount };
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  renderTransactions();
}

function renderTransactions() {
  const list = document.getElementById('list');
  const balance = document.getElementById('balance');
  list.innerHTML = '';
  let total = 0;
  transactions.forEach(t => {
    total += t.amount;
    const li = document.createElement('li');
    li.textContent = `${t.text}: $${t.amount}`;
    list.appendChild(li);
  });
  balance.textContent = `Balance: $${total.toFixed(2)}`;
}

renderTransactions();

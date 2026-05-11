import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("input1").value = "4Geeks";
  addItem("input1", "list1");

  document.getElementById("input2").value = "Academy";
  addItem("input2", "list2");

  document.getElementById("input3").value = "com";
  addItem("input3", "list3");
}

function updateDomainList() {
  const pronouns = Array.from(document.querySelectorAll('#list1 span')).map(s => s.textContent);
  const adjs = Array.from(document.querySelectorAll('#list2 span')).map(s => s.textContent);
  const extensions = Array.from(document.querySelectorAll('#list3 span')).map(s => s.textContent);

  const finalList = document.getElementById('final-list');

  finalList.innerHTML = "";

  if (pronouns.length === 0 || adjs.length === 0 || extensions.length === 0) {
    finalList.innerHTML = 'Some data missing on a column...';
    return;
  }

  pronouns.forEach(p => {
    adjs.forEach(a => {
      extensions.forEach(ext => {
        const pTag = document.createElement('p');
        pTag.className = "mb-2 fw-bold";

        if (a.toLowerCase().endsWith(ext.toLowerCase())) {
          const aCut = a.slice(0, -ext.length);
          pTag.innerHTML = `${p}${aCut}<span class="text-success">.${ext}</span> ✨`;
        } else {
          pTag.textContent = `${p}${a}.${ext}`;
        }

        finalList.appendChild(pTag);
      });
    });
  });
}

function addItem(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const text = input.value.trim();

  if (text === "") return;

  const itemBox = document.createElement('div');
  itemBox.className = 'item-box shadow-sm mb-2 d-flex justify-content-between align-items-center p-2 bg-light border rounded';

  const span = document.createElement('span');
  span.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn btn-danger btn-sm';
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = function () {
    list.removeChild(itemBox);
    updateDomainList();
  };

  itemBox.appendChild(span);
  itemBox.appendChild(removeBtn);
  list.appendChild(itemBox);

  input.value = "";
  input.focus();

  updateDomainList();
}

window.addItem = addItem;

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const btn = this.nextElementSibling;
      btn.click();
    }
  });
});

window.addItem = addItem;
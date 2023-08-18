const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
    <div class="items">
      <div class="fitsrt-two" onclick="strikeContent(this)"    >
        <img id ="radio-image"   src="/images/radio-button.png" />
        <p style="cursor: pointer;" >${inputBox.value}</p>
      </div>
      <img  onclick="deleteImage(this)"  id ="deleteButton" src="/images/delete-button.png" alt="" />
    </div>
  `;
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}
var flag = 0;

function strikeContent(mainElement) {
  const imageElement = mainElement.firstElementChild;
  const secondChildElement = mainElement.children[1];

  secondChildElement.style.textDecoration === "line-through";

  if (flag == 1) {
    imageElement.src = "/images/radio-button.png";
    secondChildElement.style.textDecoration = "none";
    flag = 0;
    saveData();
  } else {
    imageElement.src = "/images/checked.png";
    secondChildElement.style.textDecoration = "line-through";
    flag = 1;
    saveData();
  }
}

function deleteImage(imageElement) {
  const previousSibling = imageElement.previousElementSibling;
  const imageElement1 = previousSibling.firstElementChild;
  const imgAddress = imageElement1.src;
  const imageReal = imgAddress.slice(21);

  if (imageReal == "/images/radio-button.png") {
    confirm("Please Complete the work");
  } else {
    const listItem = imageElement.parentNode;
    listItem.parentNode.remove();
  }
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();

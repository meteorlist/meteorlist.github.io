const output = document.querySelector(".output");
const output2 = document.createElement("div");
const ul = document.createElement("ul");
output.append(output2);
const url = "addons.json";
window.addEventListener("DOMContentLoaded", ()=>{
    loadData()
})

function loadData() {
    fetch(url).then(rep=>rep.json())
    .then((data) =>{
        addToPage(data);
    })
}

function addToPage(arr) {
    arr.forEach(element => {
        const div = document.createElement("div");;
        div.className = "addonpanel";
        output.append(div);
        



        const nameText = document.createElement("h1");
        nameText.textContent = element.name;
        div.append(nameText);

        const authorText = document.createElement("h3");
        authorText.textContent = element.author;
        div.append(authorText);

        const infoButton = document.createElement("button");
        infoButton.textContent = "Show Info";
        div.append(infoButton);

        


    });
}
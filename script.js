function uploadFiles(){

    let files =
    document.getElementById("documents").files;

    if(files.length===0){
        alert("Please upload documents");
        return;
    }

    document.getElementById("status").innerHTML=
    `
    <p>Documents Uploaded Successfully</p>
    <p>OCR Processing Started...</p>
    `;
}
const dropZone =
document.querySelector(".drop-zone");

dropZone.addEventListener("dragover",e=>{
    e.preventDefault();
});

dropZone.addEventListener("drop",e=>{
    e.preventDefault();

    const files =
    e.dataTransfer.files;

    showFiles(files);
});
function showFiles(files){

    const fileList =
    document.getElementById("fileList");

    fileList.innerHTML="";

    for(let file of files){

        let li=
        document.createElement("li");

        li.textContent=file.name;

        fileList.appendChild(li);
    }
}
const documentsChart =
document.getElementById('documentsChart');

new Chart(documentsChart, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'Documents',
            data: [45,60,75,90,120,150]
        }]
    }
});
const hsCodeChart =
document.getElementById('hsCodeChart');

new Chart(hsCodeChart, {
    type: 'pie',
    data: {
        labels: [
            'Electronics',
            'Textiles',
            'Machinery',
            'Chemicals'
        ],
        datasets: [{
            data: [35,25,20,20]
        }]
    }
});
const countryChart =
document.getElementById('countryChart');

new Chart(countryChart, {
    type: 'bar',
    data: {
        labels: [
            'USA',
            'China',
            'Germany',
            'Japan',
            'UAE'
        ],
        datasets: [{
            label:'Imports',
            data:[120,220,80,70,100]
        }]
    }
});
function generateDeclaration(){

    const exporter =
    document.getElementById("exporter").value;

    const importer =
    document.getElementById("importer").value;

    const country =
    document.getElementById("country").value;

    const hscode =
    document.getElementById("hscode").value;

    const goods =
    document.getElementById("goods").value;

    const declaration = {
        exporter,
        importer,
        country,
        hs_code:hscode,
        goods_description:goods
    };

    document.getElementById(
        "jsonPreview"
    ).textContent =
    JSON.stringify(
        declaration,
        null,
        2
    );
}
function registerUser(){

    const email =
    document.getElementById("registerEmail").value;

    const password =
    document.getElementById("registerPassword").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem(
        "userEmail",
        email
    );

    alert("Registration Successful");

    window.location.href =
    "./login.html";
}
function login(){

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem(
        "isLoggedIn",
        "true"
    );

    window.location.href =
    "./dashboard.html";
}
function logout(){

    localStorage.removeItem("isLoggedIn");

    window.location.href =
    "./login.html";
}
function downloadJSON(){

    const content =
    document.getElementById(
        "jsonPreview"
    ).textContent;

    const blob =
    new Blob(
        [content],
        {
            type:"application/json"
        }
    );

    const url =
    URL.createObjectURL(blob);

    const a =
    document.createElement("a");

    a.href = url;
    a.download =
    "customs_declaration.json";

    a.click();
}

function exportPDF(){
    alert(
        "PDF Export will connect to backend later"
    );
}

function exportExcel(){
    alert(
        "Excel Export will connect to backend later"
    );
}
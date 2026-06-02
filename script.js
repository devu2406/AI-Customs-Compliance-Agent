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
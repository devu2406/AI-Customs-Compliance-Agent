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
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteURL");
var dataList=[]; 

if(localStorage.getItem("dataList") == null){
    dataList = [];
}else{
  dataList=JSON.parse(localStorage.getItem("dataList"));

  displayData(dataList);

}
function addData() {
    for (let i = 0; i< dataList.length; i++) {
        if(dataList[i].name === siteNameInput.value){
            document.getElementById("warningRepeat").classList.replace("d-none", "d-block");
           displayData(null);
        }
       
    }


    if (validateSiteName() == true) {
        validateSiteName();
           
    } else if (validateSiteURL() == true) {
        validateSiteURL();

    }  else  {
        site = {
            name: siteNameInput.value,
            Url: siteUrlInput.value
        }
        dataList.push(site);
        localStorage.setItem("dataList",JSON.stringify (dataList) );
        displayData(dataList);
        
        clearData();
    }


}





function displayData(data) {
    var balckBox = ``;
    for (var i = 0; i < data.length; i++) {
        balckBox += `<div class="d-flex flex-row  ps-5 rad my-5 py-4 ">
        <h3>${data[i].name}</h3>
        <a class="btn btn-primary m-1" href="${dataList[i].Url}" target="_blank">Visit</a>
        <button onclick ="deleteData(${i})" class="btn btn-danger m-1" >Delete</button>

    </div> `;

    }
    document.getElementById("show").innerHTML = balckBox;
}



function clearData() {
    siteNameInput.value = "";
    siteUrlInput.value = "";

}

function deleteData(index) {
    dataList.splice(index, 1);
    localStorage.setItem("dataList",JSON.stringify(dataList));

    displayData(dataList);
}





function validateSiteName(value) {

    if (siteNameInput.value == "") {

        document.getElementById("warningName").classList.replace("d-none", "d-block")
        return true
    } else {
        document.getElementById("warningName").classList.replace("d-block", "d-none")

    }
}



function validateSiteURL(url) {

    if (siteUrlInput.value == "") {

        document.getElementById("warningUrl").classList.replace("d-none", "d-block")
        return true
    } else {
        document.getElementById("warningUrl").classList.replace("d-block", "d-none")

    }

}


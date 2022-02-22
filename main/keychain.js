let requestURL = 'itemlist.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    } };
request.open("GET", requestURL, true);
request.send();
function dataReportStatus(data) {
    //Keychain
    var temp = "";
    var productList = document.getElementById("productList");
    for (let i = 0; i < data.Keychain.length; i++) {
        temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[i].Store_Image+'">&nbsp;<a href="'+data.Keychain[i].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
    }
    productList.innerHTML = temp;
}

function selector() {
    var data = JSON.parse(request.responseText);
    var temp = "";
    var productList = document.getElementById("productList");
    var select = document.getElementById("sorting").value;
    if(select == "default"){
        for (let i = 0; i < data.Keychain.length; i++) {
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[i].Store_Image+'">&nbsp;<a href="'+data.Keychain[i].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }else if(select == "popularity"){
        for (let i = 0; i < data.Keychain.length; i++) {
            for(let j = 0; j < data.Keychain.length; j++){
                if(data.Keychain[j].Popularity == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[i].Store_Image+'">&nbsp;<a href="'+data.Keychain[i].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "rating"){
        for (let i = 0; i < data.Keychain.length; i++) {
            for(let j = 0; j < data.Keychain.length; j++){
                if(data.Keychain[j].Rating == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[j].Store_Image+'">&nbsp;<a href="'+data.Keychain[j].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "latest"){
        for (let i = 0; i < data.Keychain.length; i++) {
            for(let j = 0; j < data.Keychain.length; j++){
                if(data.Keychain[j].Latest == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[j].Store_Image+'">&nbsp;<a href="'+data.Keychain[j].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "lth"){
        for (let i = 0; i < data.Keychain.length; i++) {
            for(let j = 0; j < data.Keychain.length; j++){
                if(data.Keychain[j].Low_To_High == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[j].Store_Image+'">&nbsp;<a href="'+data.Keychain[j].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "htl"){
        for (let i = 0; i < data.Keychain.length; i++) {
            for(let j = 0; j < data.Keychain.length; j++){
                if(data.Keychain[j].High_To_Low == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[j].Store_Image+'">&nbsp;<a href="'+data.Keychain[j].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }productList.innerHTML = temp;
}
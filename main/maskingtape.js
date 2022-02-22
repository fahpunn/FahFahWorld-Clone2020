let requestURL = 'itemlist.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    } };
request.open("GET", requestURL, true);
request.send();
function dataReportStatus(data) {
    //Masking_Tape
    var temp = "";
    var productList = document.getElementById("productList");
    for (let i = 0; i < data.Masking_Tape.length; i++) {
        temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[i].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[i].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
    }
    productList.innerHTML = temp;
}

function selector() {
    var data = JSON.parse(request.responseText);
    var temp = "";
    var productList = document.getElementById("productList");
    var select = document.getElementById("sorting").value;
    if(select == "default"){
        for (let i = 0; i < data.Masking_Tape.length; i++) {
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[i].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[i].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }else if(select == "popularity"){
        for (let i = 0; i < data.Masking_Tape.length; i++) {
            for(let j = 0; j < data.Masking_Tape.length; j++){
                if(data.Masking_Tape[j].Popularity == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[i].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[i].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "rating"){
        for (let i = 0; i < data.Masking_Tape.length; i++) {
            for(let j = 0; j < data.Masking_Tape.length; j++){
                if(data.Masking_Tape[j].Rating == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[j].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[j].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "latest"){
        for (let i = 0; i < data.Masking_Tape.length; i++) {
            for(let j = 0; j < data.Masking_Tape.length; j++){
                if(data.Masking_Tape[j].Latest == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[j].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[j].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "lth"){
        for (let i = 0; i < data.Masking_Tape.length; i++) {
            for(let j = 0; j < data.Masking_Tape.length; j++){
                if(data.Masking_Tape[j].Low_To_High == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[j].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[j].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }else if(select == "htl"){
        for (let i = 0; i < data.Masking_Tape.length; i++) {
            for(let j = 0; j < data.Masking_Tape.length; j++){
                if(data.Masking_Tape[j].High_To_Low == i+1){
                    temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[j].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[j].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[j].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[j].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[j].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[j].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
                    break;
                }
            }
        }
    }productList.innerHTML = temp;
}
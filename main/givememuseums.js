let requestURL = 'itemlist.json'; 
let request = new XMLHttpRequest(); 
request.onreadystatechange = function () { 
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    } }; 
request.open("GET", requestURL, true); 
request.send(); 
function dataReportStatus(data) {
    
    //Exclusive_Products
    var temp = "";
    var productList = document.getElementById("productList");
    for (let i = 0; i < data.Exclusive_Products.length; i++) {
        if(data.Exclusive_Products[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Exclusive_Products[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Exclusive_Products[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Exclusive_Products[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Exclusive_Products[i].Store_Image+'">&nbsp;<a href="'+data.Exclusive_Products[i].Store_Link+'" class="color-artist bold-artist">'+data.Exclusive_Products[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Sticker.length; i++) {
        if(data.Sticker[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Sticker[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Sticker[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Sticker[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Sticker[i].Store_Image+'">&nbsp;<a href="'+data.Sticker[i].Store_Link+'" class="color-artist bold-artist">'+data.Sticker[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Postcard.length; i++) {
        if(data.Postcard[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Postcard[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Postcard[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Postcard[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Postcard[i].Store_Image+'">&nbsp;<a href="'+data.Postcard[i].Store_Link+'" class="color-artist bold-artist">'+data.Postcard[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Mobile_Gadget.length; i++) {
        if(data.Mobile_Gadget[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Mobile_Gadget[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Mobile_Gadget[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Mobile_Gadget[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Mobile_Gadget[i].Store_Image+'">&nbsp;<a href="'+data.Mobile_Gadget[i].Store_Link+'" class="color-artist bold-artist">'+data.Mobile_Gadget[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Memo_Pad.length; i++) {
        if(data.Memo_Pad[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Memo_Pad[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Memo_Pad[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Memo_Pad[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Memo_Pad[i].Store_Image+'">&nbsp;<a href="'+data.Memo_Pad[i].Store_Link+'" class="color-artist bold-artist">'+data.Memo_Pad[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Keychain.length; i++) {
        if(data.Keychain[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Keychain[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Keychain[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Keychain[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Keychain[i].Store_Image+'">&nbsp;<a href="'+data.Keychain[i].Store_Link+'" class="color-artist bold-artist">'+data.Keychain[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Masking_Tape.length; i++) {
        if(data.Masking_Tape[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Masking_Tape[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Masking_Tape[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Masking_Tape[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Masking_Tape[i].Store_Image+'">&nbsp;<a href="'+data.Masking_Tape[i].Store_Link+'" class="color-artist bold-artist">'+data.Masking_Tape[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Notebook.length; i++) {
        if(data.Notebook[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Notebook[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Notebook[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Notebook[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Notebook[i].Store_Image+'">&nbsp;<a href="'+data.Notebook[i].Store_Link+'" class="color-artist bold-artist">'+data.Notebook[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }for (let i = 0; i < data.Accessory.length; i++) {
        if(data.Accessory[i].Store_Name == "GIVE ME MUSEUMS"){
            temp += '<div class="col-3"><a class="official" href="producttemplate.html"><img class="width-100" src="'+data.Accessory[i].Title_Image_Front+'"></a><p class="s-14 mt-3"><a class="product-a" href="producttemplate.html">'+data.Accessory[i].Title+'</a><br><span class="color-pink">★★★★★</span><br><b>'+data.Accessory[i].Price+'</b><br><br>Store : &nbsp;&nbsp;<img class="width-8" src="'+data.Accessory[i].Store_Image+'">&nbsp;<a href="'+data.Accessory[i].Store_Link+'" class="color-artist bold-artist">'+data.Accessory[i].Store_Name+'</a><p class="big-star">★★★★★</p><br></div>';
        }
    }
    productList.innerHTML = temp;
}
<html><head><link rel="stylesheet" href="index.css"><link rel="icon" type="image/x-icon" href="https://play-lh.googleusercontent.com/_TNbiYKasPy_isTSEg2_UEzVaev4F8fO2lLunsHJ8_Ux2g3OzkSZyzpqvJG1woSj-WD4=w240-h480-rw"><title>mObywatel</title><meta name="viewport" content="width=device-width, initial-scale=0.5"></head>
    
    
    
    

<body>
    <p class="logo_text">yObywatel</p>
    <input class="classic_input firstname" placeholder="Imię">
    <input class="classic_input surname" placeholder="Nazwisko">
    <input class="classic_input pesel" placeholder="Pesel">
    <input class="classic_input urodzin" placeholder="Data urodzin">
    <input class="classic_input image" placeholder="Url zdjęcia">
    
    <button class="go">wejdź</button>

    <script src="index.js"></script>
</body></html>

<head><link rel="stylesheet" href="index.css"><link rel="icon" type="image/x-icon" href="https://play-lh.googleusercontent.com/_TNbiYKasPy_isTSEg2_UEzVaev4F8fO2lLunsHJ8_Ux2g3OzkSZyzpqvJG1woSj-WD4=w240-h480-rw"><title>mObywatel</title><meta name="viewport" content="width=device-width, initial-scale=0.5"></head>



<body>
    <p class="logo_text">yObywatel</p>
    <input class="classic_input firstname" placeholder="Imię">
    <input class="classic_input surname" placeholder="Nazwisko">
    <input class="classic_input pesel" placeholder="Pesel">
    <input class="classic_input urodzin" placeholder="Data urodzin">
    <input class="classic_input image" placeholder="Url zdjęcia">
    
    <button class="go">wejdź</button>

    <script src="index.js"></script>
</body>


<html><head><link rel="stylesheet" href="index.css"><link rel="icon" type="image/x-icon" href="https://play-lh.googleusercontent.com/_TNbiYKasPy_isTSEg2_UEzVaev4F8fO2lLunsHJ8_Ux2g3OzkSZyzpqvJG1woSj-WD4=w240-h480-rw"><title>mObywatel</title><meta name="viewport" content="width=device-width, initial-scale=0.5"></head>
    
    
    
    

<body>
    <p class="logo_text">yObywatel</p>
    <input class="classic_input firstname" placeholder="Imię">
    <input class="classic_input surname" placeholder="Nazwisko">
    <input class="classic_input pesel" placeholder="Pesel">
    <input class="classic_input urodzin" placeholder="Data urodzin">
    <input class="classic_input image" placeholder="Url zdjęcia">
    
    
    </input>
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".firstname");
    var surname = document.querySelector(".surname");
    var pesel = document.querySelector(".pesel")
    var urodzin = document.querySelector(".urodzin")
    var image = document.querySelector(".image");
    
    var params = new URLSearchParams();
    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    params.set("pesel", pesel.value)
    params.set("urodzin", urodzin.value)
    
     location.href = "id.html?" + params;

});

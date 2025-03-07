<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz ID</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .container { width: 300px; margin: 50px auto; }
        input { width: 100%; margin: 10px 0; padding: 8px; }
        button { padding: 10px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Wprowadź swoje dane</h2>
        <input type="text" class="firstname" placeholder="Imię">
        <input type="text" class="surname" placeholder="Nazwisko">
        <input type="text" class="pesel" placeholder="PESEL">
        <input type="date" class="urodzin">
        <input type="file" class="image">
        <button class="go">Prześlij</button>
    </div>

    <script>
        document.querySelector(".go").addEventListener('click', () => {
            var firstname = document.querySelector(".firstname").value.trim();
            var surname = document.querySelector(".surname").value.trim();
            var pesel = document.querySelector(".pesel").value.trim();
            var urodzin = document.querySelector(".urodzin").value;
            var image = document.querySelector(".image").files[0];

            if (!firstname || !surname || !pesel || !urodzin) {
                alert("Proszę wypełnić wszystkie pola!");
                return;
            }

            var params = new URLSearchParams({
                firstname,
                surname,
                pesel,
                urodzin
            }).toString();

            location.href = "id.html?" + params;
        });
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=h, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hey Whats Up?</h1>
    <script>
        //If else statement / Conditon statement
        var time = prompt("Hey Whats the time:");
        if(time>5 && time<12){
            alert("Good Morning");
        }else if(time>=12 && time<17){
            alert("Goode Afternoon");
        }else if(time>=17 && time<21){
            alert("Goodbye Evening");
        }else {
            alert("Good Night")
        }
        //The Switch statement
        var fruitype = prompt("Konsa fal Chaihiye")
        switch(fruitype) {
            case 'Narangi':
                console.log("Narangi hai 60rs killo");
                break;
            case 'Sabe':
                console.log("Sabe hai 180rs killo");
                break;
            case 'Kele':
                console.log("kele hai 40rs Dozen");
                break;
            case 'Aam':
                console.log("Aam hai 80rs killo");
                break;
            default:
                console.log(`${fruitype} nahi hai`)
        }
        console.log("Aur kuch chahihiye")
        //Loop Statement 
          //For loop Statement
              // writing 5 table
        for (let i = 5; i <51; i= i + 5) {
            console.log(i)
        }
    </script>

</body>
</html>
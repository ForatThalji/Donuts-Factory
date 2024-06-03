



    let text;
    let person = prompt("Please enter your name:", "Forat Thalji");
    let gender = prompt("Please enter your gender:", "Male or Female");
    if ((person == null || person == "")||(gender == null || gender == "")) {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }

    if (gender.toLowerCase() === 'male') {
                text = 'Mr. ' + person;
            } else if (gender.toLowerCase() === 'female') {
                text = 'Ms. ' + person;
            } else {
                text = person;
             }
    document.getElementById("demo").innerHTML = text;
    var order = prompt('Choose from menue (Donut/Coffee/Ice Cream/Bakery)?');
    var item = prompt('Enter the name of your order:');
    alert("your order is prepared");
    var message = text + ' the ordere is ' + item;
    console.log(message); 
    
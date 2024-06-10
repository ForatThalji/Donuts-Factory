



    let text;
    let person = prompt("Please enter your name:", "Forat Thalji");
    let gender = prompt("Please enter your gender:", "Male or Female");

    if ((person == null || person == "")||(gender == null || gender == "")) {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }

 

   while(gender != "male" && gender !="female"){
    gender = prompt("Please enter your gender:", "Male or Female");
        if (gender.toLowerCase() === 'male') {
                        text = 'Mr. ' + person;
                    } else if (gender.toLowerCase() === 'female') {
                        text = 'Ms. ' + person;
                    } else {
                        text = person;
                    }

console.log(text);
   }

     
    alert(text);
    var order = prompt('Choose from menue (Donut/Coffee/Ice Cream/Bakery)?');
    var item = prompt('Enter the name of your order:');
    var message = text + ' the ordere is ' + item;
    alert("your order is prepared");
    console.log(message); 
    
    const arr =[person,gender,order,item];
    for(let i=0;i<=arr.length;i++){
      console.log("Hi "+arr[0]+" Gender is : "+arr[1]+" and your order is : "+arr[2]+" the type: "+arr[3]);
    }


document.getElementById("name").innerHTML="Welcome "+person;
document.getElementById("Gender").innerHTML="Gender :"+gender;
document.getElementById("Order").innerHTML="Order :"+order;
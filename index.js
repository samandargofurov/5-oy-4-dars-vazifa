// const greet = document.getElementById("greet");

// const elements = document.getElementsByTagName("span");

// const byClass = document.getElementsByClassName("test")

// console.log(elements);

// greet.style.color = "red";
// greet.style.backgroundColor = "black"
// greet.style.textAlign = "center"
// greet.style.padding = "20px"

/*
Foydalanuvchidan uning ma'lumotlarini prompt orqali oladigan hamda olingan ma'lumotlarni
sahifada ko'rsatib beradigan dastur yarating.

Bunda foydalanuvchidan quyidagi ma'lumotlarini olishi kerak

1. Ismi
2. Familiyasi
3. Yoshi
4. Elektron pochtasi

Ushbu ma'lumotlarni olib bo'lgandan keyin ularni sahifada elementlarga qo'yib chiqarib berish kerak
Va eng pastiga saglash nomli tugma goyiladi
Tugma bosilganda ushbu foydalanuvchining ma'lumotlarini localStorage ga saqlab goyishi kerak boladi
Keyingi safar sahifa yuklanganda ham ushbu ma'lumotlarni ko'rsatib tursin
*/

let firstName = document.write(prompt("ismingizni kiriting..."));
let lastName = document.write(prompt("familiyangizni kiriting..."));
let age = document.write(+prompt("yoshingizni kiriting..."));
let emile = document.write(prompt("emile-gizni kiriting... (test@gmail.com)"));

function validatefirstName(firstName) {
  if (Number(firstName)) {
    alert("isim number bolmaydi");
  }
};

const validateLastName = (lastName) => {
  if (Number(lastName)) {
    alert("familiyangiz number bolmaydi");
    return false;
  }
};

function validateAge(age) {
  if (age <= 0 || age > 150 || !age) {
    alert("yosh notogri kiritildi");
    return false;
  }

  return true;
};

const validateEmail = (emile) => {
  return String(emile)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

if (validatefirstName(firstName)) {

  if (validateLastName(lastName)) {

    if (validateAge(age)) {
      if (validateEmail(emile)) {

        let obj = {
          firstName: firstName,
          lastName: lastName,
          age: age,
          emile: emile
        };
        console.log(obj);
      }
    }
  }
}


const name = document.setItem('h1');


const btn = document.querySelector("#btn");

btn && btn.addEventListener('click', function() {
  
})
// btn.style.borderRadius = "20px";
// btn.style.border = "none";
// btn.style.fontSize = "18px";
// btn.style.width = "150px";
// btn.style.height = "30px";
// btn.style.textAlign = "center";
// btn.style.fontFamily = "cursive";

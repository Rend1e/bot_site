let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let get_reg = document.getElementById("get_reg");
let popup_close = document.getElementById("popup_close");
tg.expand();
        
buy.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("popup").style.display = "block";
  document.getElementById("reg").style.display = "block";
  document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
})  

popup_close.addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
  document.getElementById("reg").style.display = "none";
  document.getElementById("main").style.display = "flex";
})


get_reg.addEventListener("click", () => {
  document.getElementById("error").innerText = ' ';
  let name = document.getElementById("user_name").value;
  let email = document.getElementById("user_email").value;
  let phone = document.getElementById("user_phone").value;

if (name.length < 2) { 
  document.getElementById("error").innerText = 'Ошибка в имени';
  return;
}
  if (email.length < 5) { 
    document.getElementById("error").innerText = 'Ошибка в email';
    return;
}
if (phone.length < 10) { 
  document.getElementById("error").innerText = 'Ошибка в номере телефона';
  return;
}

let data = {
  name: name,
  email: email,
  phone: phone
}
tg.sendData(JSON.stringify(data));
tg.close();
})


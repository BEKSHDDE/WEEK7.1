const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const lowerBtn = document.getElementById("lower");
      
      let counterValue = 0;

      addBtn.addEventListener("click", function (event) {
        counterValue += 1;
        counter.innerHTML = counterValue;
      });
      lowerBtn.addEventListener("click", function (event) {
        counterValue -= 1;
        counter.innerHTML = counterValue;
      });
   
let btnT = document.getElementById("btnT");
let btnA = document.getElementById("btnA");

function getAllWords() {
  fetch("/translate.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.translate);

      let inputA = document.getElementById("from2").value.trim();
      let inputT = document.getElementById("from1").value.trim();

        btnT.onclick = () => {
          let inputAValue = document.getElementById("from2").value.trim().toLowerCase();
          let inputTElement = document.getElementById("from1");

          for (let i in data.translate) {
            if (data.translate[i].translate.trim().toLowerCase().includes(inputAValue) && inputAValue != '') {
              console.log(data.translate[i].word);
              inputTElement.value = data.translate[i].word;
            }
          }
        };

        btnA.onclick = () => {
          let inputTValue = document.getElementById("from1").value.trim().toLowerCase();
          let inputAElement = document.getElementById("from2");

          for (let i in data.translate) {
            if (data.translate[i].word.trim().toLowerCase().includes(inputTValue) && inputTValue != '') {
              console.log(data.translate[i].translate);
              inputAElement.value = data.translate[i].translate;
            }
          }
        };
      
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

let clearT = document.getElementById("t")
let clearA = document.getElementById("a")

let inputA = document.getElementById("from2")
let inputT = document.getElementById("from1")

clearA.onclick = () => {
  inputA.value = ''
}

clearT.onclick = () => {
  inputT.value = ''
}

getAllWords()
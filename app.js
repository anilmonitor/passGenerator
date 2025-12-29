import cryptoRandomString from "https://esm.sh/crypto-random-string";

let select = document.querySelector("select");
let inp = document.querySelector(".inp");
let genBtn = document.querySelector("#genBtn");
let yourPass = document.querySelector("#yourPass");
let copyBtn = document.querySelector("#copyBtn");
let span = document.querySelector("span");

select.addEventListener("change", () => {
  document.querySelector("span").style.display = "none";
});

genBtn.addEventListener("click", () => {
  if (select.value === "none") {
    document.querySelector("span").style.display = "block";
  } else {
    document.querySelector("span").style.display = "none";
  }

  let lenOfNum = Number(inp.value);

  if (select.value === "num") {
    yourPass.innerText = cryptoRandomString({
      length: lenOfNum,
      type: "numeric",
    });

    copyNow();
  } else if (select.value === "str") {
    yourPass.innerText = cryptoRandomString({
      length: lenOfNum,
      type: "alphanumeric",
    });

    copyNow();
  } else if (select.value === "mixStrong") {
    yourPass.innerText = cryptoRandomString({
      length: lenOfNum,
      type: "ascii-printable",
    });

    copyNow();
  } else {
    document.querySelector("span").style.display = "block";
  }
});

function copyNow() {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(yourPass.innerText);
  });
}

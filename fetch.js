const b = document.querySelector("select");
fetch("https://dog.ceo/api/breeds/list/all")
  .then((resp) => resp.json())
  .then((resp) => {
    if (resp.status != "success") return;
    console.log(resp.message);

    for (const key in resp.message) {
      if (resp.message[key].length > 0) {
        for (const value of resp.message[key]) {
          b.innerHTML += `<option value="${key}/${value}">${value} ${key}</option>`;
        }
      } else {
        b.innerHTML += `<option value="${key}">${key}</option>`;
      }
    }
  });

function getPhoto(e) {
  e.preventDefault();
  const breed = e.target.querySelector("select").value.toLowerCase();

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp.status != "success") return;

      document.querySelector(
        ".result"
      ).innerHTML = `<img src="${resp.message}" alt="">`;
    });
}

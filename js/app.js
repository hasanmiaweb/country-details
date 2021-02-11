const searchBtn = document.getElementById("searchInputBtn");
const searchInput = document.getElementById("searchInput");
searchBtn.addEventListener("click", function () {
  searchButton();
});

const searchButton = () => {
  const mainApi = `https://restcountries.eu/rest/v2/name/${searchInput.value}`;
  fetch(mainApi)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let img = document.getElementById("flag");
        img.src = element.flag;
        document.getElementById("countryName").innerText = " " + element.name;
        document.getElementById("capital").innerText = " " + element.capital;

        document.getElementById("region").innerText = " " + element.region;
        document.getElementById("area").innerText = " " + element.area;
        document.getElementById("timezones").innerText =
          " " + element.timezones;
        document.getElementById("callingCodes").innerText =
          " " + element.callingCodes;
        document.getElementById("currencies").innerText =
          " " + element.currencies[0].name;
        document.getElementById("symbol").innerText =
          " " + element.currencies[0].symbol;
      });
    });
};

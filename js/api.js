// bat su kien cho search button
document.getElementById("searchBtn").addEventListener("click", function () {
    // kiem tra du lieu nhap vao
    const searchInput = document.getElementById("search").value.trim();
  
    // khong co du lieu ==> khong thuc hien
    if (searchInput === "") {
      alert("Vui long nhap tu khoa tim kiem.");
      return;
    }
  
    // lay du lieu tu API va tim kiem tren API
    loadData(searchInput);
    return;
  });
  
  // ham load du lieu tu API
  function loadData(searchInput) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    // fetch du lieu tu API
    fetch(apiURL)
      .then(response => {
        if (response.status === 404) {
          throw new Error("Khong tim thay du lieu phu hop.");
        }
        // chuyen kieu json -> javascript object (json())
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Hien thi du lieu
        // Assuming 'name', 'sprites.front_default' for image, and some descriptive text for 'bio' exist in the 'data' object
        const name = data.name;
        const img_url = data.sprites.front_default;
        // You might need to fetch more detailed information for a proper bio
        const bio = `This is information about ${data.name}.`;
        renderData(name, img_url, bio);
      })
      .catch(error => {
        alert(error);
      });
  }
  
  // ham render du lieu
  function renderData(name, img_url, bio) {
    // lay element trong HTML => load lai noi dung
    const nameElement = document.getElementById("name");
    const imgElement = document.querySelector("#image");
    const bioElement = document.getElementById("bio");
  
    // gan du lieu vao element
    nameElement.textContent = name;
    imgElement.src = img_url;
    imgElement.alt = name;
    bioElement.innerHTML = `<strong>Wright:</strong> ${bio} kg ` 

  }
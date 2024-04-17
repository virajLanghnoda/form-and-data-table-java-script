function submitForm(event) {
    event.preventDefault();


    // get all values
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const mobNo = document.getElementById("mobNo").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    const hobbies = Array.from(
      document.querySelectorAll('input[name="hobbies[]"]:checked')
    )
      .map((hobby) => hobby.value)
      .join(", ");
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;


    const userDataTable = document
      .getElementById("userData")
      .getElementsByTagName("tbody")[0];

    //   console.log(userDataTable);

    // creating new row
    const newRow = userDataTable.insertRow();
    // console.log(newRow);

    // creaating column
    const cells = [
      { fullname: fName + " " + lName },
      mobNo,
      email,
      gender,
      hobbies,
      country,
      state,
    ];

    // Inserting data in table
    for (let i = 0; i < cells.length; i++) {
      const cell = newRow.insertCell(i);
      if (i == 0) {
        cell.appendChild(document.createTextNode(cells[i].fullname));
      } else {
        cell.appendChild(document.createTextNode(cells[i]));
      }
    }

    // Action buttons
    const actionsCell = newRow.insertCell(cells.length);
    const actionsCell2 = newRow.insertCell(cells.length);
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", function () {
      updateRow(newRow);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteRow(newRow);
    });

    actionsCell.appendChild(updateButton);
    actionsCell2.appendChild(deleteButton);

    clearForm();
  }

  //Update States Value
  function updateState() {
    var countryDdown = document.getElementById("country");
    var stateDdown = document.getElementById("state");

    stateDdown.innerHTML = "";

    var selectedCountry = countryDdown.value;
    

    if (selectedCountry === "India") {
      addOptions(stateDdown, [
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chhattisgarh",
          "Delhi",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal"
      
        
      ]);
    } else if (selectedCountry === "Australia") {
      addOptions(stateDdown, [
        "Australian Capital Territory",
        "New South Wales",
        "Northern Territory"
      ]);
    } 
    else if (selectedCountry === "USA") {
      addOptions(stateDdown, [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]);
    }
    else if (selectedCountry === "China") {
      addOptions(stateDdown, [
        "Anhui",
        "Beijing",
        "Chongqing",
        "Fujian",
        "Gansu",
        "Guangdong",
        "Guangxi",
        "Guizhou",
        "Hainan",
        "Hebei",
        "Heilongjiang",
        "Henan",
        "Hubei",
        "Hunan",
        "Inner Mongolia",
        "Jiangsu",
        "Jiangxi",
        "Jilin",
        "Liaoning",
        "Ningxia",
        "Qinghai",
        "Shaanxi",
        "Shandong",
        "Shanghai",
        "Shanxi",
        "Sichuan",
        "Tianjin",
        "Tibet (Xizang)",
        "Xinjiang",
        "Yunnan",
        "Zhejiang"
      ]);
    }
    else if (selectedCountry === "Canada") {
      addOptions(stateDdown, [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories"
      ]);
    }
  }


  function addOptions(dropdown, options) {
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.text = options[i];
      dropdown.add(option);
    }
  }

  //Update Function
  function updateRow(row) {
    row.parentNode.removeChild(row);


    const country = row.cells[5].textContent;
    const state = row.cells[6].textContent;


    document.getElementById("country").value = country;
    document.getElementById("state").value = state;

    var fullname = row.cells[0].textContent;
    const myArray = fullname.split(" ");

    document.getElementById("fName").value = myArray[0];
    document.getElementById("lName").value = myArray[1];
    document.getElementById("mobNo").value = row.cells[1].textContent;
    document.getElementById("email").value = row.cells[2].textContent;

    const gender = row.cells[3].textContent.toLowerCase();
    document.getElementById(gender).checked = true;


    const hobbies = row.cells[4].textContent.split(", ");
    var hobbyData = document.querySelectorAll('input[type="checkbox"]');

    for (var i = 0; i < hobbyData.length; i++) {
      for (let j = 0; j < hobbies.length; j++) {
        if (hobbyData[i].value === hobbies[j]) {
          hobbyData[i].checked = true;
        }
      }
    }

  }

  // Delete
  function deleteRow(row) {
    row.parentNode.removeChild(row);
  }

  function clearForm() {
    document.getElementById("registrationDetails").reset();
  }

  //AJAX POST
  $("button").click(function(){
    $.post("https://jsonplaceholder.typicode.com/posts%22",
    {
      name: "Donald Duck",
      city: "Duckburg"
    },
    alert("Successfully Submitted"),
    );
  });

  //AJAX GET
  // var xhr=new XMLHttpRequest();
  // xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
  // xhr.onreadystatechange=function(){
  //     if(xhr.readyState==4 && xhr.status==200){
  //         var data=xhr.responseText;
  //         console.log(data);
  //     }
  // };
  // xhr.send();


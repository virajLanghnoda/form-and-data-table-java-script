
  //AJAX POST
  //This function will run in index.js file and show alert message on click of clicking submit button 
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
  var xhr=new XMLHttpRequest();
  xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
  xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && xhr.status==200){
          var data=xhr.responseText;
          console.log(data);
      }
  };
  xhr.send();
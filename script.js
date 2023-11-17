function store(){
    var car={
        carbr:carbrand.value,
        carpr:price.value,
        carkey:carkey.value
    }
    if(car.carbrand==""||car.price==""||car.carkey==""){
        alert("Please fill up all the fields!")
    }
    else{
        if(car.carkey in localStorage){
            alert("Already Exists!")
        }
        else{
            localStorage.setItem(car.carkey,JSON.stringify(car))
            alert("Car details Stored Successfully!")
            document.getElementById("myform").reset();
        }
    }

}

function retrieve(event){
    event.preventDefault();
    let keyy=key1.value
    if(keyy==""){
        alert("Enter key!")
        console.log(keyy);
    }
    else{
        if(keyy in localStorage){
            carr=JSON.parse(localStorage.getItem(keyy));
            result.innerHTML=`<div class="card" style="width: 18rem;">
            
            <div class="card-body">
              <h5 class="card-title">Car Details</h5>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Car brand:${carr.carbr}</li>
              <li class="list-group-item">Price:${carr.carpr}</li>
              <li class="list-group-item">Key:${carr.carkey}</li>
            </ul>
            
          </div>`
          document.getElementById("myform2").reset();
        }
        else{
            alert("Key does not exists!")
            document.getElementById("myform2").reset();
        }
        
    }
    
}
function deletecar(event){
    event.preventDefault()
    let key=deletekey.value;
    if(key==""){
        alert("Enter a key");
    }
    else{
        if(key in localStorage){
            localStorage.removeItem(key);
            alert("Car details deleted successfully!")
            document.getElementById("myform3").reset()
        }
        else{
            alert("Key does not exists!")
            document.getElementById("myform3").reset()
        }
    }

}
function clearall(){
    localStorage.clear();
    result.innerHTML=""
}
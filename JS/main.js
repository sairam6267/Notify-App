// collect the ids of the form in the array
let keys = Array.from(document.querySelectorAll("#form input ,textarea"));
// Adding event listner to the submit button
const clickbtn = document.getElementById("submitbtn");
clickbtn.addEventListener("click",Response);
function Response(e){
   e.preventDefault();
   let b = fromdata();
   let showcardid = ["showcardheader","showcardpara","showcardfooter"];
   for (let [i,v] of showcardid.entries()){
      if (b[keys[i].id]==""){
         // if any input of the form is empty it will alert the user to fill
         window.alert(`${keys[i].id} is empty please fill it`)
      }
      else{
         // display the input content at particular place holders
         document.getElementById(v).innerHTML = b[keys[i].id];
      }
      
   }
   // creating the content of the user input and adding it to note list
   let vv = createcontent(b["Title"],b["Notes"],b["Deadline"]);
   document.getElementById("writtennotes").innerHTML = vv;
   
   // resetting the form after thr submission
   document.getElementById("form").reset();
}

// creating the object  of the input from 
function fromdata(){
   const obj={}
   keys.map(function(n){
      obj[n.id] = n.value
   })
   return obj
}


let arr = []
function createcontent(title,body,time){
   // generating random alphanumeric string for the ids of creating content
   let aplhanumericsid = Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('');
   // creating the content 
   const hh = `
   <button style="width:360px;"  class="btn btn-light " type="button" onclick=contentshow("${aplhanumericsid}") >${title}</button>
   <div id=${aplhanumericsid} style="display:none">
      <p>${body}<p>
      <small><b>Deadline:</b>${time}</small>
   </div>
   `
   arr.push(hh)
   return arr
}
console.log(arr)

// function of created content to toggle the content hide/show
function contentshow(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';

}

var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webitIndexedDB;

  if(!idb in window)
  {
    console.log("indexedDB is not supported");
  }
  //IndexedDB creation
  var request;
  var store;
  var open=idb.open("storeData",1);

  console.log("IndexedDb is created");
  open.onupgradeneeded=function (e){
   request=e.target.result;
   store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
    }

  open.onerror=function(error){
    console.log("error is created");
  }
  open.onsuccess=function(e){
    request=e.target.result;
    var transaction=request.transaction("formdata","readwrite");
    store=transaction.objectStore("formdata");
    var info=store.get(paravalue);
    info.onsuccess=function(data){
      console.log(data);
      personalinfo(data.target.result);
    }

}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/woman.svg";
  image.alt=pi.name;
  left.append(image);

  var name=document.createElement("h1");
  name.textContent=pi.name;
  left.append(name);
  var phoneno=document.createElement("h1");
  phoneno.textContent=pi.phoneno;
  left.append(phoneno);
  var emailid=document.createElement("h1");
  emailid.textContent=pi.emailid;
  left.append(emailid);
  var address=document.createElement("h1");
  address.textContent=pi.address;
  left.append(address);


  var h6=document.createElement("h3");
  h6.textContent="career objective";
  right.append(h6);

  var hr=document.createElement("hr");
  right.append(hr);

  var h8=document.createElement("p");
  h8.textContent=pi.career;
  right.append(h8);

  var h7=document.createElement("h3");
  h7.textContent="Education Details";
  right.append(h7);

  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
  table.border="2";
  var tr1="<tr><th>institute</th><th>branch</th><th>percentage</th><th>year</th></tr>";
  var tr2=" ";
  for(var i in pi.Education)
  {
    tr2=tr2+"<tr><td>"+pi.Education[i].institute+"</td><td>"+pi.Education[i].branch+"</td><td>"+pi.Education[i].percentage+"</td><td>"+pi.Education[i].year+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);

  var rr=document.createElement("h3");
  rr.textContent="skills";
  right.append(rr);

  var hr=document.createElement("hr");
  right.append(hr);

   var ul=document.createElement("p");
   ul.textContent=pi.skills;
   right.append(ul);


}

function submitData(){

  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var phoneno=document.querySelector("#phoneno").value;
  var emailid=document.querySelector("#emailid").value;
  var address=document.querySelector("#address").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var gpercentage=document.querySelector("#gpercentage").value;
  var icollege=document.querySelector("#icollege").value;
  var igroup=document.querySelector("#igroup").value;
  var iyear=document.querySelector("#iyear").value;
  var ipercentage=document.querySelector("#ipercentage").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var syear=document.querySelector("#syear").value;
  var spercentage=document.querySelector("#spercentage").value;
  var skills=document.querySelector("#skills").value;

  //IndexedDB Implementation

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
    store.put({
      career:career,
      name:name,
      phoneno:phoneno,
      emailid:emailid,
      address:address,
      Education:[
        {
          institute:ginstitute,
          branch:gbranch,
          year:gyear,
          percentage:gpercentage
        },
        {
        institute:icollege,
        branch:igroup,
        year:iyear,
        percentage:ipercentage
      },
      {
        institute:sinstitute,
        year:syear,
        percentage:spercentage
      }
    ],
    skills:skills
    });
  }
  window.open("index.html");
}

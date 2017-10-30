window.onload = function(){
var temp = document.getElementById('submit1');
temp.onclick = formSubmition;

var submitTemp2 = document.getElementById('submit2');
submitTemp2.onclick = formSubmition2;

var addImage = document.getElementById('Add');
addImage.onclick = function(){
  document.getElementById('model').style.display = 'block';
}
var jsonDoc = [
  {
    "imgUrl":"http://images2.fanpop.com/image/photos/10500000/Pink-Floyd-pink-floyd-10566698-1440-900.jpg",
    "name":"",
    "information":"",
    "uploadDate":""
  },
  {
    "imgUrl":"http://www.guitarnoise.com/images/features/pink-floyd-wallpaper.jpg",
    "name":"",
    "information":"",
    "uploadDate":""
  },{
    "imgUrl":"http://www.pinkfloydonline.com/wp-content/gallery/albumcovers/divisionbell.jpg",
    "name":"",
    "information":"",
    "uploadDate":""
  },{
    "imgUrl":"http://pastdaily.com/wp-content/uploads/2014/08/Pink-Floyd-resize-2.jpg",
    "name":"",
    "information":"",
    "uploadDate":""
  },{
    "imgUrl":"http://images2.fanpop.com/images/photos/5400000/Pink-Floyd-pink-floyd-5430399-750-510.jpg",
    "name":"",
    "information":"",
    "uploadDate":""
  },{
    "imgUrl":"http://1.bp.blogspot.com/-COVpn0_JSoI/UDYTioulWCI/AAAAAAAACsY/8a97SwTg8uw/s640/Pink+Floyd+-+The+Wall.jpg",
    "name":"",
    "information":"",
    "uploadDate":""
  },{
    "imgUrl":"https://40.media.tumblr.com/7479484d140a9f49a0ea9ee6d3ff12b5/tumblr_n92v0ex5cC1syce09o1_500.jpg",
    "name":"",
    "information":"",
    "uploadDate":""
  }
];
var json = JSON.parse(JSON.stringify(jsonDoc));
console.log(document.getElementById('img1'));
var images = '';
for( var i=0;i<json.length; ++i ) {
  images += '<div class = "floated_img"><button id ="'+i+'"/>X</button><button id ="'+i+'edit">Edit</button><img id = "img'+i+'" src="'+json[i]['imgUrl']+'" width="600" height="400"></div>';
}
console.log(images);
document.getElementById( 'imageCont' ).innerHTML = images;

for (var i =0; i <json.length; i++) {
  var tempId = "img"+i;
  var temp = i+"";
  document.getElementById(temp).addEventListener("click",function(e){
    console.log(temp);
    document.getElementById(e.target.id).parentNode.innerHTML='';
  },true);
}

for (var i=0; i <json.length;i++){
  var temp = i+"edit";
  document.getElementById(temp).addEventListener("click",function(e){
    console.log(temp);
    document.getElementById('model').style.display = 'block';
  },true);
}
}

function formSubmition(){
  var input = document.getElementsByTagName('input');
  var email = document.getElementById('formEmail');
  console.log(email);
  console.log(input);
  console.log("jk");
  var len = 0;
  for(var i = 0; i < input.length; i++) {
    if(input[i].hasAttribute("required")){
            if(input[i].value == ""){
                alert("Fields cannot be left empty");
            }
            else if (!validateEmail(email.value)) {
              alert('Not a Valid Email id, please enter emailId correctly');

            }
            else {
              alert('Form Submitted');
            }
        }
  }
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


 function formSubmition2(){
   var dateNow = new Date();
   var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
   var regex = new RegExp(expression);
   if(!document.getElementById('formUrl').value.match(regex)){
     alert("Enter a Valid url");
   }
   else if (document.getElementById('formName').value=="") {
     alert("Name cannot be left empty");
     console.log(document.getElementById('formName'));
   }
   else if (document.getElementById('formInfo').value=="") {
     alert("Info field cannot be left empty");
     console.log(document.getElementById('formInfo'));
   }
   else if (document.getElementById('formDate').value > dateNow && document.getElementById('formDate').value!=="") {
     alert("Enter a Valid Date");
     console.log(document.getElementById('formDate'))
   }
   else {
     document.getElementById('model').style.display = 'none';
     alert("Image Editing/Adding Done");
   }
 }

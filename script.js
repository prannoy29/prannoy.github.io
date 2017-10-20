window.onload = function(){
var temp = document.getElementById('submit1');
temp.onclick = formSubmition;
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
console.log(json);
var images = '';
for( var i=0;i<json.length; ++i ) {
  images += '<div class = "floated_img"><img src="'+json[i]['imgUrl']+'" width="600" height="400"></div>';
}
document.getElementById( 'imageCont' ).innerHTML = images;
//console.log(document.getElementById( 'imageCont' ).innerHTML);
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

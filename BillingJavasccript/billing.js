var temp1 = [[],
[],
[],
[],
[],
[],
[]];

var jsonMenu = [
  {
    "key": "Roti",
    "value": 10
  },

    {"key": "Dal",
    "value": 65
  },

  {  "key": "Rice",
    "value": 50
  },

    {"key": "Veg Thali",
    "value": 90
  },

  {  "key": "Non-Veg Thali",
    "value": 140
  },

    {"key": "Chicken Dum Biryani",
    "value":160
  },

  {  "key":"Non-Veg Platter",
    "value":250
  }
];

var jsonTable = [
  {
    "name":"Table-1",
    "price": 0 ,
    "items": 0
  },
  {
    "name":"Table-2",
    "price":0,
    "items":0
  },
  {
    "name":"Table-3",
    "price":0,
    "items":0
  },
  {
    "name":"Table-4",
    "price":0,
    "items":0
  },
  {
    "name":"Table-5",
    "price":0,
    "items":0
  },
  {
    "name":"Table-6",
    "price":0,
    "items":0
  },
  {
    "name":"Table-7",
    "price":0,
    "items":0
  }
];

window.onload = function(){

  var tbl1 = document.getElementById('tbodymenu');
  for (var i = 0; i < jsonMenu.length; i++) {
      var tr = '<tr id = "menu'+i+'"draggable="true" ondragstart="drag(event)">';
      tr += '<td>' + jsonMenu[i].key  + "<p>Rs " + jsonMenu[i].value + "</p></td></tr>";
      console.log(tr);
      tbl1.innerHTML += tr;
  }

  var tbl2 = document.getElementById('tbodytable');
  for (var i = 0; i < jsonTable.length; i++) {
      var tr = '<tr id = "table'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)">';
      tr += "<td>" + jsonTable[i].name  + '<p class = "paratable">Rs ' + jsonTable[i].price+ "  |  Total items: " +jsonTable[i].items.toString()+"</p></td></tr>";
      tbl2.innerHTML += tr;
  }
    var $rows1 = $('#table tbody tr');
    console.log($rows1);
$('#searchTable').keyup(function() {
    var val1 = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    $rows1.show().filter(function() {
        var text1 = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text1.indexOf(val1);
    }).hide();
}
);

var $row2 = $('#menu tbody tr');
$('#searchMenu').keyup(function(){
  var var2 = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

  $row2.show().filter(function() {
      var text2 = $(this).text().replace(/\s+/g, ' ').toLowerCase();
      return !~text2.indexOf(var2);
  }).hide();
});
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  jsonTable[(ev.target.id.charAt(5))].items += 1;
  jsonTable[ev.target.id.charAt(5)].price += jsonMenu[parseInt(data.charAt(4))].value;
  var tbl2 = document.getElementById('tbodytable');
  tbl2.innerHTML = '';
  for (var i = 0; i < jsonTable.length; i++) {
      var tr = '<tr id = "table'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)" onclick="popup(event)">';

    console.log();
      tr += "<td>" + jsonTable[i].name  + '<p class = "paratable">Rs ' + jsonTable[i].price.toString()+ "  |  Total items: " +jsonTable[i].items.toString()+"</p></td></tr>";
      tbl2.innerHTML += tr;
  }
  var tempObj = {};
  var temptable = temp1[ev.target.id.charAt(5)];
  var looplength = temptable.length;
  if (temptable.length===0) {
    tempObj.key = jsonMenu[parseInt(data.charAt(4))].key ;
    tempObj.value = 1;
    temp1[ev.target.id.charAt(5)].push(tempObj);
    console.log("test1");
  }
  else{
    var flagupdate = false;
    console.log(temptable);
      for(var i=0;i<temptable.length;i++){
        console.log(jsonMenu[parseInt(data.charAt(4))].key === temptable[i].key);
        if (jsonMenu[parseInt(data.charAt(4))].key === temptable[i].key) {
          temptable[i].value +=1;
          flagupdate = true;
          console.log("test2");
          break;
        }
      }
      if (flagupdate === false) {
        tempObj.key = jsonMenu[parseInt(data.charAt(4))].key;
        tempObj.value =1;
        temptable.push(tempObj);
        console.log("test3");
      }
    }
    var billtemp = document.getElementById('bill');
    billtemp.innerHTML = '';
    var mainBillDiv ='<table>';
    for (var i = 0; i < temp1.length; i++) {
      mainBillDiv += '<tbody id = "billnum'+i+'">'+'<tr><td>Item</td>  <td>Quantity</td> <td>Price(in Rs.)</td></tr>';
      for (var j = 0; j < temp1[i].length; j++) {
        if (temp1[i].length!==0) {
          var price = 0;
          for (var k = 0; k < jsonMenu.length; k++) {
            if(jsonMenu[k].key===temp1[i][j].key)
            price=temp1[i][j].value * jsonMenu[k].value;
          }
            mainBillDiv += "<tr><td>"+temp1[i][j].key +"</td>"+'<td><button id = "decrease'+i+j+'" onclick = "decrease(event)">-</button>'+temp1[i][j].value +'<button id="increase'+i+j+'" onclick="increase(event)">+</button></td><td>'+price+'</td></tr>';
        }
      }
      mainBillDiv += '<tr id ="netbill"><td>Net Amount :      </td><td>Rs. '+jsonTable[ev.target.id.charAt(5)].price+'</td></tr><tr><td><input type="button" value="CLOSE SESSION(GENERATE BILL)" onClick="window.location.reload()"></td></tr></tbody>';
    }
    mainBillDiv += "</table>";
    //console.log(mainBillDiv);
    billtemp.innerHTML+= mainBillDiv;
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function popup(ev){
  var temp = parseInt(ev.target.id.charAt(5));
  var billid = "billnum"+temp;
  console.log(document.getElementById(billid));
  console.log(billid);
  document.getElementById(billid).style.display = 'block';
  document.getElementById('bill').style.display = 'block';
}

function decrease(ev){
  var priceall= 0;
  var m = parseInt(ev.target.id.charAt(8));
  var n = parseInt(ev.target.id.charAt(9));
  if (temp1[m].length===0){window.location.reload();}
  var billid = "billnum"+m;
  jsonTable[m].items -= 1;
  jsonTable[m].price -= jsonMenu[n].value;
  if(temp1[m][n].value ===1){
  temp1[m].splice(n,1);
}
  else {
    temp1[m][n].value -= 1;
  }

  var billtemp = document.getElementById('bill');
  billtemp.innerHTML = '';
  var mainBillDiv ='<table>';
  for (var i = 0; i < temp1.length; i++) {
    mainBillDiv += '<tbody id = "billnum'+i+'">'+'<tr><td>Item</td>  <td>Quantity</td> <td>Price(in Rs.)</td></tr>';
    for (var j = 0; j < temp1[i].length; j++) {
      if (temp1[i].length!==0) {
        var price = 0;
        for (var k = 0; k < jsonMenu.length; k++) {
          if(jsonMenu[k].key===temp1[i][j].key)
          price=temp1[i][j].value * jsonMenu[k].value;
        }
          mainBillDiv += "<tr><td>"+temp1[i][j].key +"</td>"+'<td><button id = "decrease'+i+j+'" onclick = "decrease(event)">-</button>'+temp1[i][j].value +'<button id= "increase'+i+j+'"onclick = "increase(event)">+</button></td><td>'+price+'</td></tr>';
          priceall +=price;

      }
    }
    mainBillDiv += '<tr id ="netbill"><td>Net Amount :      </td><td>Rs '+priceall+'</td></tr><tr><td><input type="button" value="CLOSE SESSION(GENERATE BILL)" onClick="window.location.reload()"></td></tr></tbody>';
  }
  mainBillDiv += '</table>';
  //console.log(mainBillDiv);
  billtemp.innerHTML+= mainBillDiv;
  document.getElementById(billid).style.display = 'block';
  document.getElementById('bill').style.display = 'block';
}

function increase(ev){
  var priceall =0;
  console.log("ghgfghgfghgfghgfghgfrgh");
  var m = parseInt(ev.target.id.charAt(8));
  var n = parseInt(ev.target.id.charAt(9));
  var billid = "billnum"+m;
  temp1[m][n].value += 1;
  jsonTable[m].items += 1;
  jsonTable[m].price += jsonMenu[n].value;

  var billtemp = document.getElementById('bill');
  billtemp.innerHTML = '';
  var mainBillDiv ='<table>';
  for (var i = 0; i < temp1.length; i++) {
    mainBillDiv += '<tbody id = "billnum'+i+'">'+'<tr><td>Item</td>  <td>Quantity</td> <td>Price(in Rs.)</td></tr>';
    for (var j = 0; j < temp1[i].length; j++) {
      if (temp1[i].length!==0) {
        var price = 0;
        for (var k = 0; k < jsonMenu.length; k++) {
          if(jsonMenu[k].key===temp1[i][j].key)
          price=temp1[i][j].value * jsonMenu[k].value;
        }
          mainBillDiv += "<tr><td>"+temp1[i][j].key +"</td>"+'<td><button id = "decrease'+i+j+'" onclick = "decrease(event)">-</button>'+temp1[i][j].value +'<button id="increase'+i+j+'" onclick = "increase(event)">+</button></td><td>'+price+'</td></tr>';
          priceall += price
      }
    }
    mainBillDiv += '<tr id ="netbill"><td>Net Amount :      </td><td>Rs. '+priceall+'</td></tr><tr><td><input type="button" value="CLOSE SESSION(GENERATE BILL)" onClick="window.location.reload()"></td></tr></tbody>';
  }
  mainBillDiv += "</table>";
  billtemp.innerHTML+= mainBillDiv;
  document.getElementById(billid).style.display = 'block';
  document.getElementById('bill').style.display = 'block';
}

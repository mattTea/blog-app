

var table = document.getElementById("index") 

// Loop through all rows and columns of the table and popup alert with the value 
// /content of each cell. 
for (var i = 0; i < table.rows.length; i++) { 
  var row = table.rows.item[i]; 
  for ( var j = 0; j < row.cells.length; j++ ) { 
    var col = row.cells.item[j];
    alert(col.firstChild.innerText); 
  } 
}

var table = document.getElementById("index") 
var row = table.rows.item[0];
var col = row.cells.item[0];
var cellText = col.firstChild.innerText;
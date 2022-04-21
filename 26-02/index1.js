const range = prompt('enter the range');
const n = range.split("-");
const num1 = parseInt(n[0]);
const num2 = parseInt(n[1]);

if(num1<num2){
    if(num2<=10){
        document.write( "<table><tr><thcolspan='3'>  SQUARES AND CUBES OF GIVEN RANGE </th></tr>" );
        document.write( "<tr><td>Number</td><td>Square</td><td>Cube</td></tr>" );
        for(var i=num1; i<=num2; i++)
        {
        document.write( "<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i
        + "</td></tr>" ) ;
        }
        document.write( "</table>" ) ;
    }
    else
    alert("invalid range");
}
else
    alert("invalid range");
// from data.js
var tableData = data;
var tbody = d3.select('tbody')

// YOUR CODE HERE!
function setTable(D) {
    tbody.text(" ");
    D.forEach(function(item) {
    row = tbody.append('tr')
    row.append('td').text(item.datetime);
    row.append('td').text(item.city);
    row.append('td').text(item.state);
    row.append('td').text(item.country);
    row.append('td').text(item.shape);
    row.append('td').text(item.durationMinutes);
    row.append('td').text(item.comments);
    })
}
setTable(tableData)

var button = d3.select('#filter-btn');
var form = d3.select('form');

function handleButton() {
    d3.event.preventDefault();
    var newTableData = tableData
    var selected_date = d3.select("#datetime").property('value');
    var selected_city = d3.select("#city").property('value');
    var selected_state = d3.select("#state").property('value');
    var selected_country = d3.select("#country").property('value');
    var selected_shape = d3.select("#shape").property('value');
    if (selected_date) {

        newTableData = newTableData.filter(item => item.datetime == selected_date); 
    }
    if (selected_city) {
        newTableData = newTableData.filter(item => item.city == selected_city.toLowerCase());
    }
    if (selected_state) {
        tnewTableData = vnewTableData.filter(item => item.state == selected_state.toLowerCase());
    }
    if (selected_country) {
        newTableData = newTableData.filter(item => item.country == selected_country.toLowerCase());
    }
    if (selected_shape) {
        newTableData = newTableData.filter(item => item.shape == selected_shape.toLowerCase());
    }
 
    setTable(newTableData);

}
form.on('change keyup', handleButton);
button.on('click',handleButton)
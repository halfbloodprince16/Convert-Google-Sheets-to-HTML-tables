google.load('visualization', '1', {
    packages: ['table']
});
var visualization;
var x,y;
function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1yznGEvWQyofdkS0YNRePwmpA_FdH3QLSClFH0zUic2k/edit?usp=sharing');
    query.setQuery('SELECT B,C,E');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);

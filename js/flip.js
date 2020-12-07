function previous() {
    var iTable = document.getElementById('myTable');
    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);
    if (pageNum == 1) {
        window.alert('The page is currently on the first page, cannot turn the previous page')
    }
    if (pageNum > 1)
    {
        document.getElementById('pageNum').innerText = pageNum - 1;
        for (var i=(pageNum-2)*10+1; i<(pageNum-1)*10+1; i++) {
            iTable.rows[i].style.display = 'table-row';
        }
        for (var i=(pageNum-1)*10+1; i<pageNum*10+1; i++) {
            iTable.rows[i].style.display = 'none';
        }
    }
}
function next() {
    var iTable = document.getElementById('myTable');
    var pageSum = Math.ceil((iTable.rows.length-1) / 10);
    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);
    if (pageNum < pageSum) {
        document.getElementById('pageNum').innerText = pageNum + 1;
        for (var i=(pageNum-1)*10+1; i<pageNum*10+1; i++) {
            iTable.rows[i].style.display = 'none';
        }
        for (var i=pageNum*10+1; i<(pageNum+1)*10+1; i++) {
            iTable.rows[i].style.display = 'table-row';
        }
    }
    else {
        window.alert('It is currently the last page, cannot turn the next page')
    }
}
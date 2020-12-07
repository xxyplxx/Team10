// examine
function examine(obj) {
    // open Examine frame
    document.getElementById('examineBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    // get current row
    var iTr = obj.parentNode.parentNode;

    // get all the values in current row
    var iTds = iTr.getElementsByTagName('td');

    // Sets the contents of the input box in the new frame to the contents of the current line
    document.getElementById('name3').value = iTds[2].innerText;
    document.getElementById('type3').value = iTds[3].innerText;
    document.getElementById('expdate3').value = iTds[4].innerText;
    document.getElementById('price3').value = iTds[5].innerText;
}

// 'Cancel' button in examine frame
function examineCancel() {
    // close frame
    document.getElementById('examineBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}
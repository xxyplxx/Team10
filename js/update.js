// update button
function update(obj) {
    // open update frame
    document.getElementById('updateBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    // get current row
    var iTr = obj.parentNode.parentNode;

    // get all cells in current row
    iTds = iTr.getElementsByTagName('td');

    // Sets the contents of the input box in the new frame to the contents of the current line
    document.getElementById('name2').value = iTds[2].innerText;
    document.getElementById('type2').value = iTds[3].innerText;
    document.getElementById('expdate2').value = iTds[4].innerText;

}

// save button
function preservation() {
    // write the new context in
    iTds[2].innerText = document.getElementById('name2').value;
    iTds[3].innerText = document.getElementById('type2').value;
    iTds[4].innerText = document.getElementById('expdate2').value;

    // close update frame
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}

// cancel button in update frame
function updateCancel() {
    // close update frame
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}

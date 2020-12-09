// add button
function add() {
    // open add frame
    document.getElementById('addBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';
}

// submit button
function sumbit() {
    // close add frame
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';

    // write into mytable
    // get mytable
    var iTable = document.getElementById('myTable');
    // get input value
    var name = document.getElementById('name1').value;
    var type = document.getElementById('type1').value;
    var expdate = document.getElementById('expdate1').value;
    var nums = iTable.rows.length;

    // create a row tr
    var iTr = document.createElement('tr');

    // change color every row
    if (nums % 2 != 0)
    {
        iTr.className = 'mainTbodyTr1';
    }
    else {
        iTr.className = 'mainTbodyTr2';
    }

    // add tr into the table
    iTable.appendChild(iTr);

    // create select
    var sel = document.createElement('input');
    sel.setAttribute('type','checkbox');
    sel.setAttribute('name','item');

    // create td cell, and add attribute
    var iTd1 = document.createElement('td');
    iTd1.className = "col1";
    iTd1.appendChild(sel);

    var iTd2 = document.createElement('td');
    iTd2.className = "col2";
    iTd2.appendChild(document.createTextNode(nums));

    var iTd3 = document.createElement('td');
    iTd3.className = "col3";
    iTd3.appendChild(document.createTextNode(name));

    var iTd4 = document.createElement('td');
    iTd4.className = "col4";
    iTd4.appendChild(document.createTextNode(type));

    var iTd5 = document.createElement('td');
    iTd5.className = "col5";
    iTd5.appendChild(document.createTextNode(expdate));

    var iTd6 = document.createElement('td');
    iTd6.className = "col6";

    var examine = document.createElement('input');
    examine.id = 'examine';
    examine.setAttribute('type','button');
    examine.setAttribute('value','View');
    examine.setAttribute('onclick','examine(this)');

    var update = document.createElement('input');
    update.id = 'update';
    update.setAttribute('type','button');
    update.setAttribute('value','Update');
    update.setAttribute('onclick','update(this)');
    iTd6.appendChild(examine);
    iTd6.appendChild(update);

    // add cell to the row
    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);
    iTr.appendChild(iTd6);

    // Initializes the input box value in the new frame
    document.getElementById('name1').value = null;
    document.getElementById('type1').value = null;
    document.getElementById('expdate1').value = null;

    document.getElementById('nums').innerText = nums;

    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);
    for (var i=10*pageNum+1; i<=nums; i++) {
        iTable.rows[i].style.display = 'none';
    }
}

// Cancel buttton in Add frame
function addCancel() {
    // Close Add frame
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}

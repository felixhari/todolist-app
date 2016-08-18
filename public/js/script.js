function addList(myTable) {

        var tabel = document.getElementById(myTable);

        var rowCount = tabel.rows.length;
        var row = tabel.insertRow(rowCount);

        var a = document.getElementById('txt1').value;
        var cell1 = row.insertCell(0);
        var element1 = document.createElement("input");
        element1.type = "text";
        element1.name = "txtbox[]";
        element1.value = a;
        cell1.appendChild(element1);
        var cell2 = row.insertCell(1);
        var element2 = document.createElement("input");
        element2.type = "checkbox";
        element2.name = "check[]";
        cell2.appendChild(element2);
        document.getElementById('txt1').value = " ";
        
    }

    function deleteList(myTable) {

        var tabel = document.getElementById(myTable);
        var rowCount = tabel.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = tabel.rows[i];
            var check = row.cells[1].childNodes[0];
            if (null != check && true == check.checked) {
                tabel.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    }
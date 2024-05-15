var tableList = document.getElementById('table_list_student');

let studentList = [];
let data_Student = [];
let data = [];

function RenderList() {
    var tablebody = tableList.querySelector('tbody');
    tablebody.innerHTML = '';

    data.forEach(student => {
        var row = document.createElement('tr');
        var Ten_cell = document.createElement('td');
        var NS_cell = document.createElement('td');
        var GT_cell = document.createElement('td');
        var CN_cell = document.createElement('td');

        Ten_cell.textContent = student.ten;
        NS_cell.textContent = student.ns;
        GT_cell.textContent = student.gt;
        CN_cell.textContent = student.cn;

        row.appendChild(Ten_cell);
        row.appendChild(NS_cell);
        row.appendChild(GT_cell);
        row.appendChild(CN_cell);

        tablebody.appendChild(row);
    });
}

RenderList();

function ShowInfo(event) {
    event.preventDefault();

    var ten = document.getElementById('ten').value;
    var chuyennganh = document.getElementById('chuyennganh');
    var rdNam = document.getElementById('rd_nam');
    var rdNu = document.getElementById('rd_nu');
    var ns = document.getElementById('dtpk').value;

    var selectedIndex = chuyennganh.selectedIndex;
    var cn = chuyennganh.options[selectedIndex].textContent;
    var gt;

    if (rdNam.checked) {
        gt = rdNam.nextElementSibling.textContent;
    }
    if (rdNu.checked) {
        gt = rdNu.nextElementSibling.textContent;
    }

    if(ten && ns && gt && cn) {
        var newStudent = { ten, ns, gt, cn };
        studentList.push(newStudent);

        sessionStorage.setItem('dataStudent', JSON.stringify(studentList));
        data_Student = sessionStorage.getItem('dataStudent');
        localStorage.setItem('data_Student', data_Student);

        data = JSON.parse(localStorage.getItem('data_Student'));

        RenderList();
    
        document.getElementById('ten').value = '';
        rdNam.checked = false;
        rdNu.checked = false;
        document.getElementById('dtpk').value = '';
    } else {
        alert('Nhập đủ thông tin');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('data_Student')) {
        data = JSON.parse(localStorage.getItem('data_Student'));
        studentList = data;
        RenderList();
    }
});
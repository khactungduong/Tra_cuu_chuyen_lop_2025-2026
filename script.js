function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

document.getElementById('searchButton').addEventListener('click', searchStudent);
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchStudent();
    }
});

function searchStudent() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (input === '') {
        resultDiv.innerHTML = '<p class="error">Vui lòng nhập tên học sinh.</p>';
        return;
    }

    const searchInput = removeVietnameseTones(input);
    const matches = [];

    for (const student of studentData) {
        const studentName = removeVietnameseTones(student["Họ và tên"].toLowerCase());

        if (studentName.includes(searchInput)) {
            matches.push(student);
        }
    }

    if (matches.length > 0) {
        let infoHTML = '';
        for (const student of matches) {
            infoHTML += `<div class="student-info">`;
            infoHTML += `<h3>Thông tin của ${student["Họ và tên"]}</h3>`;

            for (const key in student) {
                if (student[key]) {
                    if (key === "Lớp năm học 2025-2026") {
                        infoHTML += `<p><strong>${key}:</strong> <span style="color: red;">${student[key]}</span></p>`;
                    } else {
                        infoHTML += `<p><strong>${key}:</strong> ${student[key]}</p>`;
                    }
                }
            }
            infoHTML += `</div><br>`;
        }
        resultDiv.innerHTML = infoHTML;
    } else {
        resultDiv.innerHTML = '<p class="error">Không tìm thấy thông tin học sinh.</p>';
    }
}
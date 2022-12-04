// get query params
const params = new URLSearchParams(window.location.search);

// change the value of document by id
function changeValue(id, value, defaultValue) {
    console.log(id, value, defaultValue);
    if (value == null) {
        value = defaultValue;
    }
    document.getElementById(id).innerHTML = value;
}

function getDateStr(addDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + addDayCount);
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return `${y} 年 ${m} 月 ${d} 日`;
}

// get the value of the query param
changeValue("std_name", params.get("name"), "张三");
changeValue("std_id", params.get("id"), "2021223344215");
changeValue("std_department", params.get("dept"), "计算机学院（软件学院）");
changeValue("std_phone", params.get("phone"), "18345678901");
changeValue("std_teacher", params.get("teacher"), "王强");

changeValue("date_start", getDateStr(-1), "");
changeValue("date_start_2", getDateStr(-1), "");
changeValue("date_end", getDateStr(7), "");

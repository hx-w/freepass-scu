// get query params
const params = new URLSearchParams(window.location.search);

// change the value of document by id
function changeValue(id, value, defaultValue) {
    if (value == null) {
        value = defaultValue;
    }
    document.getElementById(id).innerHTML = value;
}

// get the value of the query param
changeValue("std_name", params.get("name"), "张三");
changeValue("std_id", params.get("id"), "2021223344215");
changeValue("std_department", params.get("dept"), "计算机学院（软件学院）");

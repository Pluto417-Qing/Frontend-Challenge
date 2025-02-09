document.addEventListener("DOMContentLoaded", function () {
    let fullName = localStorage.getItem("fullName");
    let email = localStorage.getItem("email");
    let githubName = localStorage.getItem("githubName");
    
    // 获取所有具有指定类名的元素
    let fullNameElements = document.getElementsByClassName("fullName");
    let emailElements = document.getElementsByClassName("email");
    let githubNameElements = document.getElementsByClassName("githubName");
    let dateIcon = document.getElementById("date");
	
	dateIcon.innerHTML = Date();
	
    // 遍历并设置 fullName 元素的内容
    for (let i = 0; i < fullNameElements.length; i++) {
        fullNameElements[i].innerHTML = fullName;
    }
    
    // 遍历并设置 email 元素的内容
    for (let i = 0; i < emailElements.length; i++) {
        emailElements[i].innerHTML = email;
    }
    
    // 遍历并设置 githubName 元素的内容
    for (let i = 0; i < githubNameElements.length; i++) {
        githubNameElements[i].innerHTML = githubName;
    }
});

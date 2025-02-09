document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止默认表单提交行为

        let inputFullName = document.getElementById("fullName");
        let inputEmail = document.getElementById("email");
        let inputGitHubName = document.getElementById("githubName");
        let flag = true;

        // 验证 fullName
        let fullName = inputFullName.value;
        if (fullName.trim() === "") {
            flag = false;
            alert("Must input your full name!");
        }

        // 验证 email
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let email = inputEmail.value;
        if (!regexEmail.test(email)) {
            flag = false;
            alert("Please input a correct email!");
        }

        // 验证 githubName
        let githubName = inputGitHubName.value;
        if (githubName.trim() === "") {
            flag = false;
            alert("Must input your GitHub username!");
        }

        // 如果所有验证都通过，则提交表单
        if (flag) {
			// 存储数据到 localStorage
            localStorage.setItem('fullName', fullName);
            localStorage.setItem('email', email);
            localStorage.setItem('githubName', githubName);
			
            // this.submit(); // 提交表单
			window.location.href = "ticket.html";
        }
    });
});

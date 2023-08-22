function register() {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

    if (password !== "" && email !== "") {
        let data = localStorage.getItem('@data');
        if (!!data) {
            let parse = JSON.parse(data);
            let check = parse.findIndex(x => x.email === email);
            if (check === -1) {
                parse.push({
                    email: email,
                    password: password
                });
                localStorage.setItem('@data', JSON.stringify(data));
            }
            else {
                alert("Bu email zaten kayıtlı.");
            }
        } else {
            let arr = [
                {
                    email: email,
                    password: password
                }
            ];
            localStorage.setItem('@data', JSON.stringify(arr));
            alert("kayıt başarılı");
        }
    }
    else {
        alert("Email veya şifre boş bırakılamaz.");
    }
};

function login() {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

    if (password !== "" && email !== "") {
        let data = localStorage.getItem('@data');
        if (!!data) {
            let parse = JSON.parse(data);
            let index = parse.findIndex(x => x.email === email);
          
            if (index === -1) {
                alert("Kayıt bulunamadı.");
            }
            else {
                let check = parse[index];
                if (check.password === password) {
                    alert("giriş başarılı!");
                    check = {
                        ...check,
                        count: check.count === undefined ? 0 : check.count + 1
                    };
                    parse = parse.filter(x => x.email !== email);
                    localStorage.setItem('@data', JSON.stringify([...parse, check]));

                    const login_count = document.getElementById('login_count');
                    login_count.innerText = check.count;

                }
                else {
                    alert("Şifre yanlış.");
                }
            }
        }
        else {
            alert("Kayıt bulunamadı.");
        }
    }
    else {
        alert("Email veya şifre boş bırakılamaz.");
    }
};
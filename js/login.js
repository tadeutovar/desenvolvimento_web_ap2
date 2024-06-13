document.addEventListener('DOMContentLoaded', function() {
    const storedPassword = localStorage.getItem('password');

    if (!storedPassword) {
        // Se não houver senha armazenada, solicitar ao usuário para configurar uma senha
        const newPassword = prompt('Configure uma nova senha:');
        if (newPassword) {
            const hashedPassword = CryptoJS.SHA256(newPassword).toString();
            localStorage.setItem('password', hashedPassword);
            alert('Senha configurada com sucesso!');
        } else {
            alert('Você deve configurar uma senha para continuar.');
        }
    }

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const password = document.getElementById('password').value;

        if (password) {
            const hashedPassword = CryptoJS.SHA256(password).toString();

            if (hashedPassword === localStorage.getItem('password')) {
                // Definir token de sessão
                localStorage.setItem('sessionToken', 'loggedIn');
                window.location.href = 'home.html';
            } else {
                document.getElementById('message').innerText = 'Senha incorreta';
            }
        } else {
            document.getElementById('message').innerText = 'Por favor, preencha o campo de senha';
        }
    });
});

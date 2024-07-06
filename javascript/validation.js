function validateForm() {
    let isValid = true;

    // Validação do Nome
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const namePattern = /^[a-zA-Z\s\u00C0-\u00FF]+$/;
    console.log("Nome: ", name.value.trim());
    if (!namePattern.test(name.value.trim())) {
        nameError.classList.add('visible');
        isValid = false;
    } else {
        nameError.classList.remove('visible');
    }

    // Validação do E-mail
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    console.log("Email: ", email.value.trim());
    if (!emailPattern.test(email.value.trim())) {
        emailError.classList.add('visible');
        isValid = false;
    } else {
        emailError.classList.remove('visible');
    }

    // Validação do Telefone
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9\-\+\s\(\)]*$/;
    if (phone.value.trim() === '' || !phonePattern.test(phone.value.trim())) {
        phoneError.classList.add('visible');
        isValid = false;
    } else {
        phoneError.classList.remove('visible');
    }

    // Validação da Empresa
    const company = document.getElementById('company');
    const companyError = document.getElementById('companyError');
    console.log("Empresa: ", company.value.trim());
    if (company.value.trim() === '') {
        companyError.classList.add('visible');
        isValid = false;
    } else {
        companyError.classList.remove('visible');
    }

    // Validação do Select
    const select = document.getElementById('select');
    const selectError = document.getElementById('selectError');
    console.log("Select: ", select.value);
    if (select.value === '') {
        selectError.classList.add('visible');
        isValid = false;
    } else {
        selectError.classList.remove('visible');
    }

    // Validação da Mensagem
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    console.log("Mensagem: ", message.value.trim());
    if (message.value.trim() === '') {
        messageError.classList.add('visible');
        isValid = false;
    } else {
        messageError.classList.remove('visible');
    }

   
    if (isValid) {
        alert("Orçamento solicitado com sucesso!");

        window.location.reload();
    } else {
        console.log("Formulário inválido, não será enviado.");
        
        setTimeout(() => {
            document.querySelectorAll('.error').forEach(error => {
                error.classList.remove('visible');
            });
        }, 4000); 
    }
}
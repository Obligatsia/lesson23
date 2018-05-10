"use strict";
let modalBody = $(".modal-body");
let modalForm = $("form[name = 'contactForm']");
let formBtn = $("#modalForm");
let result;
let error = $(".info");
let nameForm = modalForm[0].name;
let emailForm = modalForm[0].email;
let subjectForm = modalForm[0].subject;
let companyForm = modalForm[0].company;
let messageForm = modalForm[0].message;
let saveForm = (error) => {
    let name = nameForm.value;
    let email = emailForm.value;
    let subject = subjectForm.value;
    let company = companyForm.value;
    let message = messageForm.value;
    let formArr = [name, email, subject, company, message];
    formArr.forEach((elem) => {
        if (!elem) {
            $(error).addClass("error");
            $(error).text("Please, fill all fields");
        } else {
            $(error).removeClass("error");
            $(error).text("");
        }
    });
    if (!$(error).hasClass("error")) {
        if (nameValid(name, error) && emailValid(email, error) && companyValid(company, error)) {
            $(error).html("We’ll contact you as soon as possible. We don’t reply on Monday.");
            let formMessage = [name, email, subject, company, message];
            sendMessage(formMessage, error);
        }
    }
};
let showForm = () => {
    $(error).text("");
    $("#saveForm").on("click", ()=> {
        saveForm(error);
    });
};
function showMessage(error, message) {
    $(error).addClass('error');
    $(error).text("");
    $(error).text(`Enter correct ${message}`);
}
let companyValid = (formElement, error) => {
    let pattern = /^[A-Z][a-z]{2,}$/;
    result = pattern.exec(formElement);
    if (!result) {
        return showMessage(error, "Company Name");
    } else {
        return true;
    }
};
let emailValid = (formElement, error) => {
    let pattern = /^.+@.+\..+$/i;
    result = pattern.exec(formElement);
    if (!result) {
        return showMessage(error, "E-mail");
    } else {
        return true;
    }
};
let nameValid  = (formElement, error) => {
    let pattern = /^[A-Z][a-z]{1,}\s([A-Z][a-z]{1,})+$/;
    let result = pattern.exec(formElement);
    if (!result) {
        return showMessage(error, "Name");
    } else {
        return true;
    }
};
let sendMessage = (formMessage, error) => {
    let jsonMsg = JSON.stringify(formMessage);
    $.ajax({
        type: "POST",
        url: "http://some/nexisted/path.no",
        dataType: "json",
        data: jsonMsg
    }).fail((msg) => {
        $(error).addClass("error");
        $(error).html(`${msg.status} ${msg.statusText} <br/> Please try later.`);
        setTimeout(()=>{$('#registration').modal('toggle');}, 2000);
    })
};
$(formBtn).on("click", showForm);

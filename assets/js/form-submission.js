// form-submission.js

document.addEventListener("DOMContentLoaded", function () {
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
    };

    // Add an appropriate selector for your form
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});

function setSnackBar() {
  const x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function sendEmail(form) {
  const spinner = document.getElementById("spinner");
  spinner.style.visibility = "visible";
  spinner.style.opacity = 1;

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: `
    Subject: ${document.getElementById("subject").value}, 
    Message: ${document.getElementById("message").value}
    `,
  };

  const serviceId = "service_yphq37y";
  const templateId = "template_byr7es3";
  console.log(document.getElementById("name").value, params);

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
      form.reset();
      form.classList.remove("was-validated");
      setSnackBar();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      spinner.style.visibility = "hidden";
      spinner.style.opacity = 0;
    });
}

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      const forms = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            event.preventDefault();
            if (form.checkValidity()) {
              sendEmail(form);
            } else {
              form.classList.add("was-validated");
            }
          },
          false
        );
      });
    },
    false
  );
})();

window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
  if (document.querySelectorAll("video[autoplay]").length > 0) {
    const windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video[autoplay]");

    for (const element of videoEl) {
      const thisVideoEl = element,
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (videoClientRect <= windowHeight - videoHeight * 0.5 && videoClientRect >= 0 - videoHeight * 0.5) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}

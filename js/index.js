const translations = {
  ta: {
    ////Title
    company_name: "தேசிய இதழியல் நிறுவனம்",

    ///Nav menus
    nav_menu_1: "முகப்பு பக்கம்",
    nav_menu_2: "பற்றி",
    nav_menu_3: "படிப்புகள்",
    nav_menu_4: "எங்கள் அணி",
    nav_menu_5: "தொடர்பு",
    nav_menu_6: "மொழி",

    nav_sub_menu_1: "ஆங்கிலம்",
    nav_sub_menu_2: "தமிழ்",

    //banner
    banner_head: "சிறந்த ஆன்லைன் படிப்புகள்",

    /***  banner 1 ***/
    banner_head_1: "உங்கள் வீட்டிலிருந்து ஆன்லைனில் கல்வி பெறுங்கள்",
    banner_content_1: "",

    /***  banner 2 ***/
    banner_head_2: "சிறந்த ஆன்லைன் கற்றல் தளம்",
    banner_content_2: "",

    ////categories
    category_head_1: "திறமையான பயிற்றுனர்கள்",
    category_content_1:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",

    category_head_2: "ஆன்லைன் வகுப்புகள்",
    category_content_2:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",

    category_head_3: "வீட்டு திட்டங்கள்",
    category_content_3:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",

    category_head_4: "புத்தக நூலகம்",
    category_content_4:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    /////about
    about_title: "எங்களை பற்றி",
    about_heading: "தேசிய இதழியல் கழகத்திற்கு வரவேற்கிறோம்",

    //contact
    address: "49, தெற்கு உஸ்மான் சாலை, தி நகர், சென்னை -600 017",

    ///form
  },
  // Add more translations as needed
};

function setSnackBar() {
  let x = document.getElementById("snackbar");
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
  const selectedLanguage = localStorage.getItem("lang") || "en";
  if (selectedLanguage === "ta") {
    document.getElementById("lang_ta").classList.add("active");
    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.innerText =
        translations[selectedLanguage][element.getAttribute("name")];
    });
  } else {
    document.getElementById("lang_en")?.classList.add("active");
  }
})();

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  window.location.reload();
}

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      const forms = document.getElementsByClassName("needs-validation");
      const validation = Array.prototype.filter.call(forms, function (form) {
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
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video[autoplay]");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}

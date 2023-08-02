document.addEventListener("DOMContentLoaded", function () {
  const musicfest = document.getElementById("music-festivals");
  const events = document.getElementById("events");
  const behindthescenes = document.getElementById("behindthescenes");
  const product = document.getElementById("product");
  const eng = document.getElementById("eng-link");
  const sr = document.getElementById("sr-link");

  const navpocetna = document.getElementById("pocetna");
  const navportfolio = document.getElementById("portfolio");
  const navomeni = document.getElementById("omeni1");
  const navkontakt = document.getElementById("kontakt1");
  const moji = document.getElementById("moji");
  const projekti = document.getElementById("projekti");
  const muzicki = document.getElementById("muzicki");
  const festivali = document.getElementById("festivali");
  const dogadjaji = document.getElementById("dogadjaji");
  const iza = document.getElementById("iza");
  const scena = document.getElementById("scena");
  const proizvod = document.getElementById("proizvod");
  const aboutme = document.getElementById("aboutme");
  const firstpar = document.getElementById("firstpar");
  const secondpar = document.getElementById("secondpar");

  eng.classList.add("darken-text");

  musicfest.onmouseenter = function () {
    musicfest.classList.add("darken-image");
  };

  events.onmouseenter = function () {
    events.classList.add("darken-image");
  };

  behindthescenes.onmouseenter = function () {
    behindthescenes.classList.add("darken-image");
  };

  product.onmouseenter = function () {
    product.classList.add("darken-image");
  };

  musicfest.onclick = function () {
    openModalMusicFest();
    currentSlideMusicFest(1);
  };

  events.onclick = function () {
    openModalEvents();
    currentSlideEvents(1);
  };

  behindthescenes.onclick = function () {
    openModalBTS();
    currentSlideBTS(1);
  };

  product.onclick = function () {
    openModalProd();
    currentSlideProd(1);
  };

  function openModalMusicFest() {
    document.getElementById("myModalMusicFest").style.display = "block";
  }

  // Close the Modal
  function closeModalMusicFest() {
    document.getElementById("myModalMusicFest").style.display = "none";
  }

  function openModalEvents() {
    document.getElementById("myModalEvents").style.display = "block";
  }

  // Close the Modal
  function closeModalEvents() {
    document.getElementById("myModalEvents").style.display = "none";
  }

  function openModalBTS() {
    document.getElementById("myModalBTS").style.display = "block";
  }

  // Close the Modal
  function closeModalBTS() {
    document.getElementById("myModalBTS").style.display = "none";
  }

  function openModalProd() {
    document.getElementById("myModalProd").style.display = "block";
  }

  // Close the Modal
  function closeModalProd() {
    document.getElementById("myModalProd").style.display = "none";
  }

  eng.addEventListener("click", function (event) {
    event.preventDefault(); // Ovo sprečava podrazumevano ponašanje klika na link (redirekciju)

    eng.classList.remove("darken-text");
    sr.classList.add("darken-text");
    navpocetna.textContent = "Home";
    navportfolio.textContent = "Portfolio";
    navomeni.textContent = "About me";
    navkontakt.textContent = "Contact";
    moji.textContent = "MY";
    projekti.textContent = "PROJECTS";
    muzicki.textContent = "MUSIC";
    festivali.textContent = "FESTIVALS";
    dogadjaji.textContent = "EVENTS";
    iza.textContent = "BEHIND";
    scena.textContent = "THE SCENES";
    proizvod.textContent = "PRODUCT";
    aboutme.textContent = "ABOUT ME";
    firstpar.textContent =
      "Over the years, I have gained experience in capturing unforgettable moments at music festivals and events. I enjoy exploring different styles and themes. I am constantly learning new techniques and exploring the possibilities that technology offers to advance as a photographer.";
    secondpar.textContent =
      "My name is Todor Milivojević, I am 23 years old, and I have been involved in photography for nine years now. I focus on photographing music festivals and events, but at the same time, I capture various subjects. ";
    console.log('Kliknuli ste na link "ENG"');
  });

  sr.addEventListener("click", function (event) {
    event.preventDefault(); // Ovo sprečava podrazumevano ponašanje klika na link (redirekciju)

    eng.classList.add("darken-text");
    sr.classList.remove("darken-text");
    navpocetna.textContent = "Pocetna";
    navportfolio.textContent = "Portfolio";
    navomeni.textContent = "O meni";
    navkontakt.textContent = "Kontakt";
    moji.textContent = "MOJI";
    projekti.textContent = "PROJEKTI";
    muzicki.textContent = "MUZICKI";
    festivali.textContent = "FESTIVALI";
    dogadjaji.textContent = "DOGADJAJI";
    iza.textContent = "IZA";
    scena.textContent = "ZAVESA";
    proizvod.textContent = "PROIZVOD";
    aboutme.textContent = "O MENI";
    firstpar.textContent =
      "Tokom godina, stekao sam iskustvo u zabeležavanju nezaboravnih trenutaka tokom muzičkih festivala. Volim da istražujem različite stilove i teme. Učim nove tehnike i istražujem mogućnosti koje mi tehnologija pruža da bih napredovao kao fotograf.";
    secondpar.textContent =
      "Ja sam Todor Milivojević, imam 23 godine i već devet godina se bavim fotografijom. Fokusiram se na fotografisanje muzičkih festivala i događaja, ali istovremeno fotografišem različite teme.";
    console.log('Kliknuli ste na link "SR"');
  });
});

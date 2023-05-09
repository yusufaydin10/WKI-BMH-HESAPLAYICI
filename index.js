var sonuc = document.getElementById("sonuc");
sonuc.style.display = "none";

function validateForm() {
  var yas = document.getElementById("yas").value;
  var boy = document.getElementById("boy").value;
  var kilo = document.getElementById("kilo").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;

  if (!yas || !boy || !kilo) {
    alert("Lütfen Boş Alan Bırakmayınız Ve Doğru Doldurunuz...");
  } else {
    var cmboy = document.getElementById("boy").value / 100;
    var kilo = document.getElementById("kilo").value;
    var vki = kilo / (cmboy * cmboy);
    var bazal;
    if (gender == "kadin") {
      bazal = 655.1 + 9.56 * kilo + 1.85 * boy - 4.68 * yas;
    } else {
      bazal = 66.5 + 13.75 * kilo + 5.03 * boy - 6.75 * yas;
    }
    if (vki < 18) {
      sonuc.style.display = "block";
      sonuc.innerText =
        yas +
        " Yaşında," +
        boy +
        " cm Boyunda," +
        kilo +
        " Kiloda olan bir " +
        gender +
        " bireyin Vücut Kitle Endeksi Değeri Zayıftır : " +
        " " +
        vki.toFixed(1) +
        " " +
        "/ Bazal Metabolizma değeri ise : " +
        bazal.toFixed(1) +
        " kcal/gün'dür.";
    } else if (vki >= 18 && vki < 25) {
      sonuc.style.display = "block";
      sonuc.innerText =
        yas +
        " Yaşında," +
        boy +
        " cm Boyunda," +
        kilo +
        " Kiloda olan bir " +
        gender +
        " bireyin Vücut Kitle Endeksi Değeri Normaldir : " +
        " " +
        vki.toFixed(1) +
        " " +
        "/ Bazal Metabolizma değeri ise : " +
        bazal.toFixed(1) +
        " kcal/gün'dür.";
    } else if (vki >= 25 && vki < 30) {
      sonuc.style.display = "block";
      sonuc.innerText =
        yas +
        " Yaşında," +
        boy +
        " cm Boyunda," +
        kilo +
        " Kiloda olan bir " +
        gender +
        " bireyin Vücut Kitle Endeksi Değeri Kiloludur : " +
        " " +
        vki.toFixed(1) +
        " " +
        "/ Bazal Metabolizma değeri ise : " +
        bazal.toFixed(1) +
        " kcal/gün'dür.";
    } else if (vki >= 30 && vki < 40) {
      sonuc.style.display = "block";
      sonuc.innerText =
        yas +
        " Yaşında," +
        boy +
        " cm Boyunda," +
        kilo +
        " Kiloda olan bir " +
        gender +
        " bireyin Vücut Kitle Endeksi Değeri Obezdir : " +
        " " +
        vki.toFixed(1) +
        " " +
        "/ Bazal Metabolizma değeri ise : " +
        bazal.toFixed(1) +
        " kcal/gün'dür.";
    } else {
      sonuc.style.display = "block";

      sonuc.innerText =
        yas +
        " Yaşında," +
        boy +
        " cm Boyunda," +
        kilo +
        " Kiloda olan bir " +
        gender +
        " bireyin Vücut Kitle Endeksi Değeri Morbit : " +
        " " +
        vki.toFixed(1) +
        " " +
        "/ Bazal Metabolizma değeri ise : " +
        bazal.toFixed(1) +
        " kcal/gün'dür.";
    }
  }
}

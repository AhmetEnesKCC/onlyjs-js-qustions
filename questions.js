let dizi = [
  100, -50, 82, 64, 42, 24, 5, -83, 97, 69, 29, 98, -57, -95, -7, 60, 36, -30,
  22, -51,
];

// 1. Soru

// dizinin ilk elemanini en buyuk olarak sec
// ardindan dizinin her elemani ile bu elemani kiyasla
// kiyaslarken herhengi bir eleman daha buyuk ise kiyaslama elemanini bu eleman olarak degistir
// eleman kiyaslamasi bittiginde tutulan elemani don

function enbuyukBul(benimdizi) {
  let en_buyuk = benimdizi[0];

  for (var i = 1; i < benimdizi.length; i++) {
    if (benimdizi[i] > en_buyuk) {
      en_buyuk = benimdizi[i];
    }
  }
  return en_buyuk;
}

console.log("En buyuk: " + enbuyukBul(dizi));

function enkucukBul(benimdizi) {
  let en_kucuk = benimdizi[0];

  for (var i = 1; i < benimdizi.length; i++) {
    if (benimdizi[i] < en_kucuk) {
      en_kucuk = benimdizi[i];
    }
  }
  return en_kucuk;
}

console.log("En kucuk: " + enkucukBul(dizi));

// Toplam sonucunu 0 dan baslat
// Dizinin her elemanini toplam sonucuna adim adim ekle
// Toplam sonucunu don

function toplamHesapla(benimdizi) {
  let toplam_sonucu = 0;

  for (var i = 0; i < benimdizi.length; i++) {
    toplam_sonucu += benimdizi[i];
  }

  return toplam_sonucu;
}

console.log("Eleman toplami: " + toplamHesapla(dizi));

// Ortalama = Toplam / Uzunluk

function ortalamaHesapla(benimdizi) {
  const toplam = toplamHesapla(benimdizi);
  const length = benimdizi.length;
  return toplam / length;
}

console.log("Eleman ortalamasi: " + ortalamaHesapla(dizi));

// Parametreler:
// Dizi
// Eleman
// Sayaci 0 olarak belirle
// Dizideki her bir elemana bu istenilen eleman ile esitlik kiyaslamasi yap
// Esit ise counter - sayaci 1 arttir
// En son sayaci don

function tekrarHesapla(benimdizi, num) {
  let sayac = 0;
  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] === num) {
      sayac++;
    }
  }
  return sayac;
}

let tekrar_eden_eleman = 100;
console.log(
  tekrar_eden_eleman +
    " elemaninin tekrari: " +
    tekrarHesapla(dizi, tekrar_eden_eleman)
);

function tersineCevir(benimdizi) {
  // n complexity
  //   let ters_dizi = [];

  //   for (var i = 0; i < benimdizi.length; i++) {
  //     ters_dizi[i] = benimdizi[benimdizi.length - 1 - i];
  //   }

  // n / 2 complexity

  for (var i = 0; i < Math.floor(benimdizi.length / 2); i++) {
    let gecici = benimdizi[benimdizi.length - i - 1];
    benimdizi[benimdizi.length - i - 1] = benimdizi[i];
    benimdizi[i] = gecici;
  }

  return benimdizi;
}

console.log("Dizi tersi: " + tersineCevir(dizi));

// Dizinin her bir elemani icin 2 ile bolumden kalana bak
// 0 olanlar cifttir
// Digerleri tektir
// Ciftleri cikti dizisine pushla

function ciftElemanlar(benimdizi) {
  let cikti_dizisi = [];
  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] % 2 === 0) {
      cikti_dizisi.push(benimdizi[i]);
    }
  }
  return cikti_dizisi;
}

console.log("Cift dizi: " + ciftElemanlar(dizi));

function tekElemanlar(benimdizi) {
  let cikti_dizisi = [];
  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] % 2 === 1) {
      cikti_dizisi.push(benimdizi[i]);
    }
  }
  return cikti_dizisi;
}

console.log("Tek dizi: " + tekElemanlar(dizi));

function elemanVarmi(benimdizi, num) {
  let varmi = false;
  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] === num) {
      varmi = true;
      break;
    }
  }

  return varmi;
}

console.log(
  tekrar_eden_eleman +
    " Eleman var mi: " +
    elemanVarmi(dizi, tekrar_eden_eleman)
);

function kareDiziOlustur(benimdizi) {
  let kareler_dizisi = [];

  for (var i = 0; i < benimdizi.length; i++) {
    kareler_dizisi[i] = benimdizi[i] * benimdizi[i];
  }
  return kareler_dizisi;
}

console.log("Kareler dizisi: " + kareDiziOlustur(dizi));

// Sayilarin pozitifligini kontrol et
// Pozitifleri dizi yap
// Negatifleri dizi yap
// Pozitif dizisini topla
// Negatif dizisini topla
// en son iki toplami don

function isareteGoreTopla(benimdizi) {
  let pozitif_dizi = [];
  let negatif_dizi = [];

  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] < 0) {
      negatif_dizi.push(benimdizi[i]);
    } else {
      pozitif_dizi.push(benimdizi[i]);
    }
  }

  let pozitif_toplam = toplamHesapla(pozitif_dizi);
  let negatif_toplam = toplamHesapla(negatif_dizi);
  return {
    positive: pozitif_toplam,
    negative: negatif_toplam,
  };
}

function isareteGoreToplaV2(benimdizi) {
  let pozitif_toplam = 0;
  let negatif_toplam = 0;
  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] < 0) {
      negatif_toplam += benimdizi[i];
    } else {
      pozitif_toplam += benimdizi[i];
    }
  }
  return {
    positive: pozitif_toplam,
    negative: negatif_toplam,
  };
}

let start_v1 = console.time();

let isaretToplamiV1 = isareteGoreToplaV2(dizi);

const end_v1 = console.timeEnd();

let start_v2 = console.time();

let isaretToplamiV2 = isareteGoreToplaV2(dizi);

const end_v2 = console.timeEnd();

console.log(
  "Pozitif toplam: " +
    isaretToplamiV1.positive +
    "\n" +
    "Negatif toplami: " +
    isaretToplamiV1.negative +
    "\n" +
    "Zaman: " +
    end_v1 -
    start_v1
);

console.log(
  "Pozitif toplam: " +
    isaretToplamiV2.positive +
    "\n" +
    "Negatif toplami: " +
    isaretToplamiV2.negative +
    "\n" +
    "Zaman: " +
    end_v2 -
    start_v2
);

function ciftligeGoreTopla(benimdizi) {
  let cift_toplam = 0;
  let tek_toplam = 0;
  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] % 2 === 0) {
      cift_toplam += benimdizi[i];
    } else {
      tek_toplam += benimdizi[i];
    }
  }
  return {
    tek: tek_toplam,
    cift: cift_toplam,
  };
}

let ciftlik_toplami = ciftligeGoreTopla(dizi);

console.log(
  "Tek toplam: " +
    ciftlik_toplami.tek +
    "\n" +
    "Cift toplami: " +
    ciftlik_toplami.cift
);

console.log(isaretToplamiV2.positive / dizi.length);
console.log(isaretToplamiV2.negative / dizi.length);

function hangiYarida(benimdizi, num) {
  let yari = "sol";
  for (var i = 0; i < benimdizi.length; i++) {
    if (benimdizi[i] === num) {
      if (i < benimdizi.length / 2) {
        yari = "sol";
        break;
      } else {
        yari = "sag";
        break;
      }
    }
  }
  return yari;
}

let yari_elemani = -57;
console.log(
  yari_elemani + " Dizinin " + hangiYarida(dizi, yari_elemani) + " yarisinda"
);

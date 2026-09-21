function googleImageSearch(keyword, windowName) {
  const url =
    "https://www.google.com/search?tbm=isch&q=" +
    encodeURIComponent(keyword);

  window.open(url, windowName);
}


/* ====================
   고양이
==================== */

function long_cat() {
  googleImageSearch("장모종 고양이", "long_cat");
}

function short_cat() {
  googleImageSearch("단모종 고양이", "short_cat");
}

function Double_Coat_cat() {
  googleImageSearch("고양이 이중모", "Double_Coat_cat");
}

function Single_Coat_cat() {
  googleImageSearch("고양이 단일모", "Single_Coat_cat");
}


/* ====================
   강아지
==================== */

function long_dog() {
  googleImageSearch("강아지 장모종", "long_dog");
}

function short_dog() {
  googleImageSearch("강아지 단모종", "short_dog");
}

function Double_Coat_dog() {
  googleImageSearch("강아지 이중모", "Double_Coat_dog");
}

function Single_Coat_dog() {
  googleImageSearch("강아지 단일모", "Single_Coat_dog");
}

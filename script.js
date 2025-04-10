const dictionary = {
  "الرحمن": {
    "ترجمہ": "نہایت مہربان",
    "صرف": "اسم",
    "نحو": "معرفہ، مرفوع",
    "اعراب": "الرَّحْمـٰنُ"
  },
  "الرحيم": {
    "ترجمہ": "نہایت رحم کرنے والا",
    "صرف": "اسم",
    "نحو": "معرفہ، مجرور",
    "اعراب": "الرَّحِيمِ"
  }
};

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim();
  const resultBox = document.getElementById("resultBox");
  
  if (dictionary[query]) {
    const data = dictionary[query];
    resultBox.innerHTML = `
      <h2>${query}</h2>
      <p><strong>ترجمہ:</strong> ${data["ترجمہ"]}</p>
      <p><strong>صرف:</strong> ${data["صرف"]}</p>
      <p><strong>نحو:</strong> ${data["نحو"]}</p>
      <p><strong>اعراب:</strong> ${data["اعراب"]}</p>
    `;
  } else {
    resultBox.innerHTML = "<p>کوئی نتیجہ نہیں ملا۔</p>";
  }
});

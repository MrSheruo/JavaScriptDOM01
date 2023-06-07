const people = [
  {
    id: "1",
    name: "احمد",
    img: "https://picsum.photos/200",
    favAya:
      "قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا (30)",
    sora: "مريم",
  },
  {
    id: "2",
    name: "ياسر",
    img: "https://picsum.photos/201",
    favAya: "قُلۡ هُوَ ٱللَّهُ أَحَدٌ (1)",
    sora: "الإخلاص",
  },
  {
    id: "3",
    name: "عبدالعزيز",
    img: "https://picsum.photos/202",
    favAya: "اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ (1)",
    sora: "القمر",
  },
  {
    id: "4",
    name: "محمد",
    img: "https://picsum.photos/203",
    favAya: "وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ (39)",
    sora: "النجم",
  },
];

const content = document.getElementById("content");

people.forEach((person) => {
  const { img, name, favAya, sora } = person;
  console.log(person);
  content.innerHTML += `
     <div class="person">
     <img src="${img}" alt="" />
     <h2 class="red">${name}</h2>
     <h3 class="yellow">${favAya},${sora}</h3>
     </div>
    `;
});

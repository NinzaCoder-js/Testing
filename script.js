let testSavollar = [
    {
      savollar: "Fransiyani poytaxti qayer?",
      variantlar: ["London", "Parij", "Berlin"],
      togriJavob: 2
    },
    {
      savollar: "Qaysi sayyora Quyoshga yaqinroq?",
      variantlar: ["Merkuriy", "Venera", "Mars"],
      togriJavob: 1
    },
    {
      savollar: "Apple kompaniyasi asoschisi kim?",
      variantlar: ["Mark Sukerberg", "Stiv Jobs", "Ilon Mask"],
      togriJavob: 2
    },
    {
      savollar: "Qaysi dasturlash tili 10 kun ichida yaratilgan?",
      variantlar: ["Python", "Swift", "JavaScript"],
      togriJavob: 3
    },
    {
      savollar: "Suvda atom bormi?",
      variantlar: ["iye Atom bombaku", "Sizdachi zizi bormi", "Albatta hama atom suvdaku"],
      togriJavob: 3
    },  
  ];
  
 
  function startTest() {
    let chekbox=true;
    while (chekbox){
      
    }
    
    let startTime = new Date(); 
  
    let togrijavob = 0;
  
    for (let i = 0; i < testSavollar.length; i++) {
      let savollar = testSavollar[i].savollar;
      let variantlar = testSavollar[i].variantlar;
  
      console.log(` ${i + 1}-savol: ${savollar}`);
      console.log("Javoblar:");
      for (let j = 0; j < variantlar.length; j++) {
        console.log(`${j + 1}. ${variantlar[j]}`);
      }
  
      let userAnswer = +(prompt("Javobingizni tanlang: (1, 2, yoki 3):"));
  
      if (userAnswer == testSavollar[i].togriJavob) {
        togrijavob++;
      }
    }
  
    let endTime = new Date(); 
    let workingTime = (endTime - startTime) / 1000; 
  
    let togrilikKoeffisenti = (togrijavob / testSavollar.length) * 100;
  
    console.log(`Test ${workingTime} sekund ichida tugadi.`);
    console.log(`To'g'ri javoblar soni: ${togrijavob}`);
    console.log(`To'g'ri javoblar koeffisienti: ${togrilikKoeffisenti}%`);
  }
  
  startTest();
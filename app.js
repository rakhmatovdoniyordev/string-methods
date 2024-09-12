
const time = document.querySelector(".time")

function clock(){
    let date = new Date()
    let hour = date.getHours().toString().padStart(2, "0")
    let minute = date.getMinutes().toString().padStart(2, "0")
    let second = date.getSeconds().toString().padStart(2, "0")
    time.innerHTML = `${hour}:${minute}:${second}`
}
clock()


setInterval( ()=>{
    clock()
}, 1000)


const day = document.querySelector(".weeks")

function week(){
    let date = new Date()
    let weeks = date.getDay()
    switch (weeks){
        case 0:
            day.innerHTML = `Sunday`
            break
        case 1:
            day.innerHTML = `Monday`
            break
        case 2:
            day.innerHTML = `Tuesday`
            break
        case 3:
            day.innerHTML = `Wednesday`
            break
        case 4:
            day.innerHTML = `Thursday`
            break
        case 5:
            day.innerHTML = `Friday`
            break
        case 6:
            day.innerHTML = `Saturday`
            break
    }
}
week()

const date = document.querySelector(".date")

function year(){
    let now = new Date()
    let day = now.getDate().toString().padStart(2, "0")
    let month = (now.getMonth() + 1).toString().padStart(2, "0")
    let year = now.getFullYear()
    date.innerHTML = `${day} ${month}, ${year}`
}
year()


{
    //1
    //Kiritilgan so'zlarni barchasini katta harfda qilib beruvchi funksiya
    const makeUpperCase = str => str.toUpperCase()
    console.log(makeUpperCase("hello world"));
}

{
    //2
    //Kiritilgan ikkita so'zdan iborat ism va familiyalarni bosh harflarini oluvchi funksiya(masalan Rakhmatov Doniyor - R.D "ism va familiya kichik harfda kiritilsa ham Javobi katta harflarda chiqadi")
    function abbrevName(name){
        let [firstName, lastName] = name.split(" ");
        return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
    }
    console.log(abbrevName("Rakhmatov Doniyor"));
    console.log(abbrevName("rakhmatov doniyor"));
}

{
    //3
    //Banjo o'ynayabsizmi ? "Siz banjo o'ynayapsizmi?" Degan savolga javob beradigan funksiya yarating. Agar ismingiz "R" harfi yoki kichik "r" harfi bilan boshlansa, "name" banjo o'ynayapsiz aks holda "name" banjo o'ynamayabsiz natijasi chiqadi.
    function areYouPlayingBanjo(name) {
        let arr = name.split("")
        if(arr[0] == "R" || arr[0] == "r") return `${name} plays banjo`
        else return `${name} does not play banjo`
        return name;
    }
    console.log( areYouPlayingBanjo("Rasul") );
    console.log(areYouPlayingBanjo("Abubakr"));
}

{
    //4
    //Manfiy bo'lmagan butun son berilgan bo'lsa, 3masalan, shivirlangan satrni qaytaring: "1 sheep...2 sheep...3 sheep...". Kirish har doim haqiqiy bo'ladi, ya'ni manfiy butun sonlar bo'lmaydi.
    let countSheep = function (num){
        let result = ``
        for(let i = 1; i <= num; i++){
          result += `${i} sheep...`
        }
        return result
    }
    console.log(countSheep(4));
}

{
    //5
    //Deoksiribonuklein kislotasi, DNK biologik tizimlardagi asosiy ma'lumotni saqlash molekulasidir. U to'rtta nuklein kislota asoslaridan iborat: Guanin ('G'), Sitozin ('C'), Adenin ('A') va Timin ('T').Ribonuklein kislotasi, RNK hujayralardagi asosiy xabarchi molekuladir. RNK kimyoviy tuzilishi DNKdan biroz farq qiladi va unda timin yo'q. RNKda timin boshqa nuklein kislotasi Uratsil ("U") bilan almashtiriladi.Berilgan DNK qatorini RNK ga aylantiruvchi funksiya yarating.
    //Masalan "GCAT" => "GCAU"
    const DNAtoRNA = dna => dna.replaceAll("T", "U")
    console.log(DNAtoRNA("TTTG"));
}

{
    //6
    //Satrni massivga aylantiruvchi funksiya yarating
    const stringToArray = string => string.split(" ")
    console.log(stringToArray("Hello my name is Doniyor"));
}

{
    //7
    //aSizga massiv va qiymat beriladi x. Sizga kerak bo'lgan yagona narsa, taqdim etilgan massivda qiymat mavjudligini tekshirish. Massiv raqamlar yoki satrlarni o'z ichiga olishi mumkin. X ham bo'lishi mumkin. trueAgar massivda qiymat bo'lsa, qaytaring , falseagar bo'lmasa.
    const check = (a, x) => a.includes(x)
    console.log(check([23, 14, 12, 8, 19, 17], 14));
}

{
    //8
    //Satrdagi barcha undov (!) belgilarini olib tashlavchi funksiya yarating
    const removeExclamationMarks = s => s.replaceAll("!", "")
    console.log(removeExclamationMarks("Hello ! World!!"));
}

{
    //9
    //Trolllar sizning sharhlar bo'limingizga hujum qilmoqda! Ushbu vaziyatni hal qilishning keng tarqalgan usuli - trollarning izohlaridan barcha unli tovushlarni olib tashlash, tahdidni zararsizlantirish. Sizning vazifangiz qatorni oladigan funktsiyani yozish va barcha unlilarni olib tashlagan holda yangi qatorni qaytarishdir. Masalan, "Ushbu veb-sayt yutqazganlar uchun LOL!" "Ths wbst s fr lsrs LL!" ga aylanadi.
    //Eslatma: bu uchun kata yunli tovush hisoblanmaydi.
    const disemvowel = str => str.replaceAll(/[aeiouAEIOU]/g, "");
    console.log(disemvowel("This is my phone"));
}

{
    //10
    //Kiritilgan matn orasidan 5 va undan kop harfdan iborat so'zlarni teskari qilib matnni chiqaruvchi funksiya yarating.
    //Eslatma: Matn faqat harf va bo'shliq(space)lardan iborat bo'ladi.
    const spinWords = string => string.split(" ").map( word => word.length >= 5 ? word.split("").reverse().join(""): word).join(" ")
    console.log(spinWords("Hey fellow warriors"));
}

{
    //qo'shimcha vazifa
    //plastik raqami kiritiladi ushbu raqamni ayrim qismini sifrlarini yashirish kerak (masalan: 8600 1501 4586 2366 - 8600 **** **** **** 2366)
    function card(num){
        num = num.replace(/\s+/g, '');
        if (num.length !== 16) {
            return "To'g'ri kiriting";
        }
        let head = num.slice(0, 4);
        let end = num.slice(-4);
        let middle = num.slice(4, -4).replace(/\d/g, '*');
        return `${head} ${middle} ${end}`;
    }
    console.log(card("8600 1501 4586 2366"));
}
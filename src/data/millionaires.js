const millionaires = [
    {
        key: 1,
        name: "Sundar Pichai",
        company: "Google",
        position: "CEO",
        age: 49,
        netWorth: 0.6,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Sundar_Pichai_Attr-Maurizio-Pesce-1.jpg"
    },
    {
        key: 2,
        name: "Elon Musk",
        company: "Microsoft",
        position: "CEO",
        age: 50,
        netWorth: 1,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/ElonMusk.png"
    },
    {
        key: 3,
        name: "Satya Nadella",
        company: "Tesla",
        position: "CEO",
        age: 54,
        netWorth: 1,
        image: "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
    },
    {
        key: 4,
        name: "Bill Gates",
        company: "Microsoft",
        position: "CEO",
        age: 65,
        netWorth: 100,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/BillGates-1.jpg"

    },
    {
        key: 5,
        name: "Jeff Bezos",
        company: "Amazon",
        position: "CEO",
        age: 57,
        netWorth: 111.4,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/JeffBezos.jpg"
    },
    {
        key: 6,
        name: "Daniel Zhang",
        company: "Alibaba",
        position: "CEO",
        age: 49,
        netWorth: 1,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/%E9%80%8D%E9%81%A5%E5%AD%90%E6%A0%87%E5%87%86%E7%85%A71-1.png"
    },
    {
        key: 7,
        name: "Mark Zuckerberg",
        company: "Facebook",
        position: "CEO",
        age: 40,
        netWorth: 60,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/Mark-Zuckerberg.jpg"
    },
    {
        key: 8,
        name: "Lakshmi Mittal",
        company: "ArcelorMittal",
        position: "CEO",
        age: 71,
        netWorth: 11,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/LakshmiMittal.jpg"
    },
    {
        key: 9,
        name: "Indra Nooyi",
        company: "PepsiCo",
        position: "CEO",
        age: 65,
        netWorth: 0.08,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Indra-Nooyi-attr-Jeff-Bedford.jpg"
    },
    {
        key: 10,
        name: "Warren Buffett",
        company: "Berkshire Hathaway",
        position: "CEO",
        age: 91,
        netWorth: 83,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/WarrenBuffett-1.jpg"
    },
    {
        key: 11,
        name: "Tim Cook",
        company: "Apple",
        position: "CEO",
        age: 60,
        netWorth: 1,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Tim_Cook_2009-attr-Valery-Marchive-LeMagIT.jpg"
    },
    {
        key: 12,
        name: "Aliko Dangote",
        company: "Dangote Group",
        position: "CEO",
        age: 64,
        netWorth: 11,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/AlikoDangote.jpg"
    },
    {
        key: 13,
        name: "Larry Page",
        company: "Alphabet Inc.",
        position: "CEO",
        age: 48,
        netWorth: 50,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/LarryPage.jpg"
    },
    {
        key: 14,
        name: "Abigail Johnson",
        company: "Fidelity Investments",
        position: "CEO",
        age: 59,
        netWorth: 16,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/AbigailJohnson.jpg"
    },
    {
        key: 15,
        name: "Michael Dell",
        company: "Dell Technologies",
        position: "CEO",
        age: 56,
        netWorth: 40,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/MichaelDell-2.jpg"
    },
    {
        key: 16,
        name: "Lei Jun",
        company: "Xiaomi",
        position: "CEO",
        age: 48,
        netWorth: 9,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/Lei-Jun-Attribution-Stefen-Chow-Fortune-Global-Forum-600x400.jpg"
    },
    {
        key: 17,
        name: "Jamie Dimon",
        company: "J.P. Morgan",
        position: "CEO",
        age: 65,
        netWorth: 1,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Jamie_Dimon-attr-World-Economic-Forum.jpg"
    },
    {
        key: 18,
        name: "Jack Dorsey",
        company: "Twitter",
        position: "CEO",
        age: 44,
        netWorth: 5,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/Jack_Dorsey_2014-cellanr-Flickr.jpg"
    },
    {
        key: 19,
        name: "Jen-Hsun Huang",
        company: "NVIDIA",
        position: "CEO",
        age: 58,
        netWorth: 4.6,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/Jen-Hsun_Huang_Headshot_attr-Nvidia-Corporation.jpg"
    },
    {
        key: 20,
        name: "Richard D. Fairbank",
        company: "Capital One",
        position: "CEO",
        age: 71,
        netWorth: 1,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/02/Richard-Fairbank-Attr-Stanford-Business-School.jpg"
    },
    {
        key: 21,
        name: " Charles Koch",
        company: "Koch Industries",
        position: "CEO",
        age: 85,
        netWorth: 50,
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/CharlesKoch-1.jpg"
    }

]
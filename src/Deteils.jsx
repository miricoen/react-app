
export default function Deteils() {
    
    fetch("http://localhost:8787/businessData").then((x)=>console.log(x.ok))

    const business = {
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "The best coding academy in the world",
    };

   // Simple POST request with a JSON body using fetch
const element = document.querySelector('#post-request .article-id');
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },//למה צריך להוסיף application
   body: JSON.stringify(business)
    // body:business
};
var r;
fetch('http://localhost:8787/businessData', requestOptions)
    .then(response => response.json())
    .then(r=>console.log(r))
    // .then(data => element.innerHTML = data.id );



    
    // const {setScore} = props;// const score = props.score; const setScore = props.setScore;
    // // const [x, setX] = useState(Math.floor(Math.random() * 10));
    // let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // console.log("arr", arr)
    // function changeScore(index) {
    //    if (index === x){
    //     setScore(s => s + 10)
    //    }
    //    else{
    //     setScore(s => s - 5)
    //    }
    // }
    
    
    // console.log(x)
    return (

        //קוד JS נכתב בתוך סוגרים מסולסלים
        <div> 
            <h1>dfgh</h1>
            <p>בעל העסק :</p>
            <p>כתובת :</p>
            <p>טלפון:</p>
            <p>פרטים נוספים:</p>
          
         </div>
    )
}
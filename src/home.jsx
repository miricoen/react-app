// import { useState } from "react"

export default function Home(business) {
    <h1>ברוך הבא</h1>;
    <a href=""></a>
    const {setScore} = props;// const score = props.score; const setScore = props.setScore;
    // const [x, setX] = useState(Math.floor(Math.random() * 10));
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("arr", arr)
    function changeScore(index) {
       if (index === x){
        setScore(s => s + 10)
       }
       else{
        setScore(s => s - 5)
       }
    }
    
    
    console.log(x)
    return (

        //קוד JS נכתב בתוך סוגרים מסולסלים
        <div> 
            {
            arr.map((p, index) => <div onClick={() =>changeScore(index)} className={index === x ? "cube red" : "cube grey"}></div>)
        }</div>
    )
}
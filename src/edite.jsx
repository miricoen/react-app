import ButtonBusinesDate from "./businessData"
export default function changeHeader() {


    const editForm = document.querySelector("#edit-form");

    editForm.addEventListener("submit", (e) => {
        // מבטל את אירוע ההגשה
        e.preventDefault();

        // מעדכן את ה-state של העסק עם הנתונים החדשים מהטופס
        setId(document.querySelector("#name").value);
        setAddress(document.querySelector("#address").value);
        setName(document.querySelector("#address").value);
        setPhone(document.querySelector("#phone").value);
        setOwner(document.querySelector("#owner").value);
        setLogo(document.querySelector("#logo").value);
        setDescription(document.querySelector("#description").value);

        // סוגר את הטופס
        editForm.style.display = "none";
    });
    return (<form id="edit-form" style="display: none;">
        <h1>ערוך עסק</h1>
        <input type="text" id="name" placeholder="שם העסק" />
        <input type="text" id="address" placeholder="כתובת העסק" />
        <input type="text" id="phone" placeholder="טלפון העסק" />
        <input type="text" id="owner" placeholder="בעל העסק" />
        <input type="text" id="logo" placeholder="לוגו העסק" />
        <input type="text" id="description" placeholder="תיאור העסק" />
        <button type="submit">שמור</button>
    </form>
    )
}

function changeServe() {

}

function changeMeet() {

}
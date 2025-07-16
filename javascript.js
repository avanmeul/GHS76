const txt = `
<xml>
    <rsvps>
        <rsvp>
            <last>Baumgardner</last>
            <first>Vicky</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments></comments>
            <method>Classmates.com</method>
        </rsvp>
        <rsvp>
            <last>Beck</last>
            <first>Shawn</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>2</guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Beegles</last>
            <first>Gail</first>
            <nee>Schulz</nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>        
        <rsvp>
            <last>Cameron</last>
            <first>Susan</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>2</guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Dalton</last>
            <first>Debbie</first>
            <nee>Davis</nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments>guest?</comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Doty</last>
            <first>William</first>
            <nee></nee>
            <confirmation>maybe</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>        
        <rsvp>
            <last>Dugan</last>
            <first>Matt</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Dunnewald</last>
            <first>Pete</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments>guest?</comments>
            <method>André</method>            
        </rsvp>
        <rsvp>
            <last>Everett</last>
            <first>Wesley</first>
            <nee></nee>
            <confirmation>maybe</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Hansen-Aran</last>
            <first>Debbie</first>
            <nee>Smyth</nee>
            <confirmation>yes</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>        
        <rsvp>
            <last>Hansford</last>
            <first>George</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Hrouda</last>
            <first>Kathy</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Kroeger</last>
            <first>Kevin</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Leger</last>
            <first>David</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Moncrieff</last>
            <first>Kathleen</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Morris</last>
            <first>William</first>
            <nee></nee>
            <confirmation>maybe</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Mozena</last>
            <first>Patty</first>
            <nee>Krause</nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments>Jack?</comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Papenfus</last>
            <first>Kurt</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments></comments>
            <method>Kurt</method>            
        </rsvp>
        <rsvp>
            <last>Snell</last>
            <first>Laura</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Stewart</last>
            <first>Mary</first>
            <nee>Webster</nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments>guest?</comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Strawn</last>
            <first>Kim</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>van Meulebrouck</last>
            <first>André</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments>wife</comments>
            <method>Classmates.com</method>            
        </rsvp>                                                          
        <rsvp>
            <last>Vogel</last>
            <first>Rob</first>
            <nee></nee>
            <confirmation>yes</confirmation>
            <guests>1</guests>
            <comments>Sherry?</comments>
            <method>Classmates.com</method>            
        </rsvp>
        <rsvp>
            <last>Walter</last>
            <first>Dan</first>
            <nee></nee>
            <confirmation>maybe</confirmation>
            <guests></guests>
            <comments></comments>
            <method>Classmates.com</method>            
        </rsvp>                           
    </rsvps>
</xml>
`;

//to do:  add comment field (in XML) for questions

const xmlDocument = new DOMParser().parseFromString(txt, "text/xml");

const rsvps = xmlDocument.querySelectorAll("rsvp");
// const rsvpsSorted = rsvps.sort((a, b) => a.last.localeCompare(b.last));
const tbl = document.getElementById("tblTest");

//sort the items first (to do)

let i = 0;
let yes = 0;
let totalGuests = 0;
let totalMaybes = 0;
let totalNos = 0;
for(const rsvp of rsvps) {
    const last = rsvp.querySelector("last").textContent;
    const first = rsvp.querySelector("first").textContent;
    const nee = rsvp.querySelector("nee").textContent;
    const confirmation = rsvp.querySelector("confirmation").textContent;
    const guests = rsvp.querySelector("guests").textContent;
    const comments = rsvp.querySelector("comments").textContent;
    const method = rsvp.querySelector("method").textContent;
    let responseClass = "no";

    switch (confirmation) {
        case "yes":
            yes += 1;
            responseClass = "responseYes";
            break;
        case "maybe":
            totalMaybes += 1;
            responseClass = "responseMaybe";
            break;
        case "no":
            totalNos += 1;
            responseClass = "responseNo";
            break; }

    i += 1;
    totalGuests += Number(guests);

    tbl.innerHTML +=
        `
        <tr class="rightJustifiedText">
            <td>${i}</td>
            <td>${last}</td>
            <td>${first}</td>
            <td>${nee}</td>
            <td class="${responseClass}">${confirmation}</td>
            <td class="centeredText">${guests}</td>
            <td>${comments}</td>
            <td>${method}</td>
        </tr>
        `        
}

document.getElementById("spnYes").innerHTML = yes;
document.getElementById("spnGuests").innerHTML = totalGuests;
document.getElementById("spnMaybes").innerHTML = totalMaybes;
document.getElementById("spnNos").innerHTML = totalNos;
document.getElementById("spnAttendees").innerHTML = yes + totalGuests;
document.getElementById("spnPossible").innerHTML = yes + totalGuests + totalMaybes;
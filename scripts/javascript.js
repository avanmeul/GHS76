/*jshint esversion: 6 */

function funInitPage() {
    const txtXmlArea = document.getElementById("idXmlRSVPs");
    populateRSVPs();
    const txtXmlTranscript = document.getElementById("idXmlRSVPsTranscript");
    txtXmlTranscript.innerHTML = "table populated";
    populateClassmates();
}

// fetch('https://drive.google.com/file/d/157XCYHaAL_ePyxjsq_MuvoAmYeny3xJD/view')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.text(); // Use .json() for JSON files
//   })
//   .then(data => {
//     console.log(data); // Process the file content
//   })
//   .catch(error => {
//     console.error('Error fetching the file:', error);
//   });

function populateRSVPs() {

    const txtXmlArea = document.getElementById("idXmlRSVPs");
    const xmlDocument = new DOMParser().parseFromString(txtXmlArea.value, "text/xml");
    const txtXmlParsed = document.getElementById("idXmlRSVPsParsed");
    const serializer = new XMLSerializer();
    //must use value, innerHTML doesn't work
    txtXmlParsed.value = serializer.serializeToString(xmlDocument); 
    //check for errors
    const errors = xmlDocument.querySelector("parsererror");
    if(errors) {
        const txtTranscript = document.getElementById("idXmlRSVPsTranscript");
        txtTranscript.innerHTML = "table not updated due to parse errors";
        return;
    }

    const rsvps = xmlDocument.querySelectorAll("rsvp");
    const tbl = document.getElementById("tblRSVPs");
    tbl.innerHTML = "";

    //sort the items first (to do)

    let i = 0;
    let yes = 0;
    let totalGuests = 0;
    let totalMaybes = 0;
    let totalNos = 0;
    rows = [];
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
        const nextRow = 
           `<tr>
                <td class="rightJustifiedText">${i}</td>
                <td>${last}</td>
                <td>${first}</td>
                <td>${nee}</td>
                <td class="${responseClass}">${confirmation}</td>
                <td class="centeredText">${guests}</td>
                <td>${comments}</td>
                <td>${method}</td>
            </tr>`;
        rows.push(nextRow);    
    }
    tbl.innerHTML = rows.join('');
    document.getElementById("spnYes").innerHTML = yes;
    document.getElementById("spnGuests").innerHTML = totalGuests;
    document.getElementById("spnMaybes").innerHTML = totalMaybes;
    document.getElementById("spnNos").innerHTML = totalNos;
    document.getElementById("spnAttendees").innerHTML = yes + totalGuests;
    document.getElementById("spnPossible").innerHTML = yes + totalGuests + totalMaybes;
    const txtTranscript = document.getElementById("idXmlRSVPsTranscript");
    txtTranscript.innerHTML = "table populated";
}

function jsRSVPsRefresh() {
    populateRSVPs();
}

function jsRSVPsCopyToClipboard() {
    const xmlRSVPsUpdated = document.getElementById("idXmlRSVPsTranscript");
    xmlRSVPsUpdated.innerHTML = "not implemented yet; do ctl-a (to select all), then ctl-c (to copy)";
}

function jsRSVPsClearXML() {
    const txtXml = document.getElementById("idXmlRSVPsParsed");
    txtXml.innerHTML = "";
    const txtTranscript = document.getElementById("idXmlRSVPsTranscript");
    txtTranscript.innerHTML = "xml response area cleared";
}

function populateClassmates() {
    const txtXMLclassmates = document.getElementById("txtClassmatesXML");
    const tblClassmates = document.getElementById("tblClassmates");
    const xmlDocument = new DOMParser().parseFromString(txtXMLclassmates.value, "text/xml");
    const classmates = xmlDocument.querySelectorAll("classmate");
    let rows = [];
    for (const classmate of classmates) {
        const key = classmate.querySelector("key");
        const last = classmate.querySelector("last");
        const first = classmate.querySelector("first");
        const middle = classmate.querySelector("middle");
        const short = classmate.querySelector("short");
        const prefix = classmate.querySelector("prefix");
        const suffix = classmate.querySelector("suffix");
        const title = classmate.querySelector("title");
        const nee = classmate.querySelector("nee");
        const reachable = classmate.querySelector("reachable");
        const comment = classmate.querySelector("comment");
        const nextRow = 
            `<tr>
                <td class="rightJustifiedText">${(key) ? key.textContent : ""}</td>
                <td>${(nee) ? nee.textContent : ""}</td>
                <td>${(last) ? last.textContent : ""}</td>
                <td>${(first) ? first.textContent : ""}</td>
                <td>${(middle) ? middle.textContent : ""}</td>
                <td>${(short) ? short.textContent : ""}</td>
                <td>${(prefix) ? prefix.textContent : ""}</td>
                <td>${(suffix) ? suffix.textContent : ""}</td>
                <td>${(title) ? title.textContent : ""}</td>
                <td>${(reachable) ? (reachable.textContent === "1" ? "yes" : "no") : "no"}</td>
                <td>${(comment) ? comment.textContent : ""}</td>
            </tr>`;
        rows.push(nextRow);
    }
    tblClassmates.innerHTML = rows.join('');
 }
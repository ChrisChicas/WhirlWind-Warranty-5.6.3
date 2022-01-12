function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

class flabel {
    constructor(formhead, formfor){
        this.formhead = formhead;
        this.formfor = formfor;
    }

    addlabel(){
        let label = document.createElement("label")
        label.setAttribute("for", this.formfor)
        label.textContent = this.formhead
        document.body.append(label)
    }

}

class form {
    constructor(type, id, name){
        this.type = type;
        this.id = id;
        this.name = name;
    }

    addform(){
        let form = document.createElement("form");
            form.innerHTML = `<input type=${this.type} id=${this.id} name=${this.name}>`
            document.body.append(form)
    }

}

let formlist = [
    { formhead: "First Name", formfor: "fname", type: "text", id: "fname", name: "fname" },
    { formhead: "Last Name", formfor: "lname", type: "text", id: "lname", name: "lname" },
    { formhead: "Company Name", formfor: "cname", type: "text", id: "cname", name: "cname" },
    { formhead: "Email", formfor: "email", type: "email", id: "email", name: "email" },
    { formhead: "Phone Number", formfor: "pn", type: "tel", id: "pn", name: "pn" },
    { formhead: "Fax Number", formfor: "faxn", type: "tel", id: "faxn", name: "faxn" },
    { formhead: "Address", formfor: "address", type: "text", id: "address", name: "address" },
    { formhead: "City", formfor: "city", type: "text", id: "city", name: "city" },
    { formhead: "State", formfor: "state", type: "text", id: "state", name: "state" },
    { formhead: "Zip", formfor: "zip", type: "text", id: "zip", name: "zip" },
    { formhead: "Country", formfor: "country", type: "text", id: "country", name: "country" },
    { formhead: "Unit Information", formfor: "unit", type: "number", id: "unit", name: "unit" },
    { formhead: "Date of Purchase", formfor: "dop", type: "date", id: "dop", name: "dop" },
    { formhead: "Model", formfor: "model", type: "text", id: "model", name: "model" },
    { formhead: "Warranty Serial Number", formfor: "serial", type: "number", id: "serial", name: "serial" }
]

let headinfo = document.createElement("h1");
headinfo.textContent = "Warranty Information";
document.body.append(headinfo);

async function formlabelmaker(){
    for(let i = 0; i < formlist.length; i++){
        let labels = new flabel(formlist[i].formhead, formlist[i].formfor)
        labels.addlabel()
        await sleep(0)
    }
}
formlabelmaker()

async function formmaker(){
    for(let i = 0; i < formlist.length; i++){
        let forms = new form(formlist[i].type, formlist[i].id, formlist[i].name)
        forms.addform()
        await sleep(0)
    }
}
formmaker()

setTimeout(function(){
    let devinfo = document.createElement("h3");
    devinfo.textContent = "Device Information";
    document.body.append(devinfo);
}, 45)

setTimeout(function(){
    let button = document.createElement("button")
    button.textContent = "Save"
    document.body.append(button)

    let button2 = document.createElement("button")
    button2.textContent = "Close"
    document.body.append(button2)
}, 75)

alert("Hello!Hope you complete all the tasks");
    window.onload = () => {
        const form1 = document.querySelector("#addForm");
    
        let items = document.getElementById("items");
        let submit = document.getElementById("submit");
    
        let editItem = null;
    
        form1.addEventListener("submit", addItem);
        items.addEventListener("click", removeItem);
    };
    
    function addItem(e) {
        e.preventDefault();
    
        if (submit.value != "Submit") {
            console.log("Hello");
    
            editItem.target.parentNode.childNodes[0].data
                = document.getElementById("item").value;
    
            submit.value = "Submit";
            document.getElementById("item").value = "";
    
           
            document.getElementById("lblsuccess")
                            .style.display = "block";
    
            setTimeout(function() {
                document.getElementById("lblsuccess")
                                .style.display = "none";
            }, 3000);
    
            return false;
        }
    
        let newItem = document.getElementById("item").value;
        if (newItem.trim() == "" || newItem.trim() == null)
            return false;
        else
            document.getElementById("item").value = "";
    
        let li = document.createElement("li");
        li.className = "list-group-item";
    
        let deleteButton = document.createElement("button");
    
        deleteButton.className = 
            "btn-danger btn btn-sm float-right delete";
    
        deleteButton.appendChild(document.createTextNode("Delete"));
    
        let editButton = document.createElement("button");
    
        editButton.className = 
                "btn-success btn btn-sm float-right edit";
    
        editButton.appendChild(document.createTextNode("Edit"));
        editButton.style.background = 'rgb(3, 24, 49)' ;
        editButton.style.height = "30px";
        editButton.style.width = "63px";
        editButton.style.borderWidth="2px";
        editButton.style.fontFamily= "Times New Roman', Times, serif";
        editButton.style.fontSize="16px";
        editButton.style.borderColor="white";
        editButton.style.borderLeftColor="black";
        editButton.style.borderBottomColor="black";
        editButton.style.marginBottom= "1%";
        editButton.style.marginTop= "2%";
        editButton.style.padding= "2%";
        editButton.style.borderLeftWidth="2px";
        editButton.style.borderRightWidth="2px";
        editButton.style.borderRadius="3px";

        editButton.style.color = "white";
        editButton.style.margin = "7px";

        



        li.appendChild(document.createTextNode(newItem));
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        deleteButton.style.background = 'rgb(3, 24, 49)' ;
        deleteButton.style.height = "30px";
        deleteButton.style.width = "63px";
        deleteButton.style.borderWidth="2px";
        deleteButton.style.fontFamily= "Times New Roman', Times, serif";
        deleteButton.style.fontSize="16px";
        deleteButton.style.borderColor="white";
        deleteButton.style.borderBottomColor="black";
        deleteButton.style.borderLeftWidth="2px";
        deleteButton.style.borderLeftColor="black";
        deleteButton.style.color="white";
        deleteButton.style.margin="7px";
        deleteButton.style.borderRadius="3px";



        



        


    
        items.appendChild(li);
    }
    
    function removeItem(e) {
        e.preventDefault();
        if (e.target.classList.contains("delete")) {
            if (confirm("Are you Sure?")) {
                let li = e.target.parentNode;
                items.removeChild(li);
                // document.getElementById("lblsuccess").innerHTML
                //     = "Text deleted successfully";
    
                document.getElementById("lblsuccess")
                            .style.display = "block";
    
                setTimeout(function() {
                    document.getElementById("lblsuccess")
                            .style.display = "none";
                }, 3000);
            }
        }
        if (e.target.classList.contains("edit")) {
            document.getElementById("item").value =
                e.target.parentNode.childNodes[0].data;
            submit.value = "EDIT";
            editItem = e;
        }
    }
    
    function toggleButton(ref, btnID) {
        document.getElementById(btnID).disabled = false;
    }
    

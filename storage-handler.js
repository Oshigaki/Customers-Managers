function recoveredInfosHandler(usersBoard) {
    if (usersBoard != null) {
        for (user of usersBoard) {
            lineCreator(user.id);
            userClass.addUserToUserList(user);
        }
    }
    else {
        alert("Aucun utilisateur enregistré")
    }
}
function infosRecoverer() {
    let infos = userClass.getDataListFromDataCenter()
    return infos
}
recoveredInfosHandler(infosRecoverer());

function modifyInfosModal(lineid) {
    
    let line = board[lineid-1]
    document.getElementById("table-line-id").textContent = `${line.id} `;
    document.getElementById("surname").value = `${line.surname} `;
    document.getElementById("name").value = `${line.name} `;
    document.getElementById("birthDate").value = `${line.birthDate} `;
    document.getElementById("email").value = `${line.email} `;
    document.getElementById("phone").value = `${line.phone} `;
    document.getElementById("sexe").value = `${line.sexe} `;
    document.getElementById("comments").value = `${line.comments} `;
    document.getElementById("table-line-modal-container").style.display = 'flex'
    
}
function showInfosModal(lineid) {
    let line = board[lineid-1]
    document.getElementById("table-line-id").textContent = `${line.id} `;
    document.getElementById("surname").value = `${line.surname} `;
    document.getElementById("name").value = `${line.name} `;
    document.getElementById("birthDate").value = `${line.birthDate} `;
    document.getElementById("email").value = `${line.email} `;
    document.getElementById("phone").value = `${line.phone} `;
    document.getElementById("sexe").value = `${line.sexe} `;
    document.getElementById("comments").value = `${line.comments} `;
    document.getElementById("table-line-modal-container").style.display = 'flex'

    document.getElementById("buttons").style.display = "none"
}

// Suppression de la ligne
function lineDeleter(id) {
    document.getElementById("table-body-container").removeChild(document.getElementById(`table-line ${id}`));
}

//filtration de tableau

function filter(event){
    let key=event.target.value;
    let users=UserList()
    users.filter((user)=>{
        return(new RegExp(key))
    })
}
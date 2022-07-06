//Création d'une instance d'utilisateur

class userClass {
    static counter = 0
    constructor(id, surname, name, birthDate, email, phone, sexe, comments) {
        this.id = id
        this.surname = surname
        this.name = name
        this.birthDate = birthDate
        this.email = email
        this.phone = phone
        this.sexe = sexe
        this.comments = comments
    }
//recupération des valeurs de l'utilisateur dans une instance 

    static createUser() {
        this.counter++;
        let user = new userClass(
         this.counter,
         document.getElementById("surname").value,
         document.getElementById("name").value,
         document.getElementById("birthDate").value,
         document.getElementById("email").value,
         document.getElementById("phone").value,
         document.getElementById("sexe").value,
         document.getElementById("comments").value
         );
        return user;
    }

//conversion de l'instance en objet
    static convertClassInstanceToObject(user) {
        let userObject = {
            id: user.id,
            surname: user.surname,
            name: user.name,
            birthDate: user.birthDate,
            email: user.email,
            phone: user.phone,
            sexe: user.sexe,
            comments: user.comments
        }
        return userObject
    }

    //Ajouter l'utilisateur dans la liste d'interface

    static addUserToUserList(user) {
        document.getElementById(`id-container ${user.id}` ).textContent = `${user.id} `;
        document.getElementById(`surname-container ${user.id}` ).textContent = `${user.surname} `;
        document.getElementById(`name-container ${user.id}` ).textContent = `${user.name} `;
        document.getElementById(`birthDate-container ${user.id}` ).textContent = `${user.birthDate} `;
        document.getElementById(`email-container ${user.id}` ).innerHTML = `${user.email} `;
        document.getElementById(`phone-container ${user.id}` ).textContent = `${user.phone} `;
        document.getElementById(`sexe-container ${user.id}` ).textContent = `${user.sexe} `;
        document.getElementById(`comments-container ${user.id}` ).textContent = `${user.comments} `;
    }
    static addUserToDataList(userObject,storage) {
        storage = storage.push(userObject);
    }
    static addDataListToDataCenter(storage) {
        localStorage.setItem("UsersList", JSON.stringify(storage))
    }
    static getDataListFromDataCenter() {
        return JSON.parse(localStorage.getItem("UsersList"))
    }
}




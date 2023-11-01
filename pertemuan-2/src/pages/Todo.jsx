import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = () => {
    console.log("# Get All Users");
    all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    store(newUser)

    console.log("# Edit User: Isfa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    update(1, editedUser)

    console.log("# Delete User: Nurul");
    destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
    {
        name: "Aufa",
        age: 20,
        major: "TI"
    },
    {
        name: "Aufa",
        age: 20,
        major: "TI"
    },
    {
        name: "Aufa",
        age: 20,
        major: "TI"
    },
    {
        name: "Aufa",
        age: 20,
        major: "TI"
    },
    {
        name: "Aufa",
        age: 20,
        major: "TI"
    },
];

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
    for(const key of users){
        console.log(key);
    }
}

// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
    users.push(user)
    for(const key of users){
        console.log(key);
    }
}

// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, user) => {
    const data = users[index]
    data.name = user.name
    data.major = user.major
    data.age = user.age

    console.log(users);
}

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
    users.splice(index)
    console.log(users);
}

export default Todo;

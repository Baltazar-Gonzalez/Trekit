const form = document.querySelector("#newUser")

form.onsubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: e.target[0].value,
            name: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
        })
    })
    .then(res => {
        console.log(res)
    }).catch(err => console.error(err))
}
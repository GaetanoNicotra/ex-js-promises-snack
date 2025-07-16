// SNACK 1

function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    })
    return promessa
}

getPostTitle(6).then(obj => console.log('Titolo del post: ' + '' + obj))
    .catch(error => console.error(error));


// SNACK 1 BONUS

function getPost(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(postData =>
                fetch(`https://dummyjson.com/users/${postData.userId}`)
                    .then(response => response.json())
                    .then(userData => {
                        const result = {
                            ...postData,
                            userData,
                        }
                        resolve(result)
                    })
                    .catch(reject)
            )
            .catch(reject);
    });

    return promessa;
}

getPost(12)
    .then(post => console.log('Post:', post))
    .catch(error => console.error('Errore:', error));


// SANCK 2

function lanciaDado() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const incastrato = Math.random() < 0.2
            if (incastrato) {
                reject("Ops.. il dado si è incastrato")

            } else {
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato)
            }
        }, 3000)
    })
    return promessa
}

lanciaDado().then(risultato => console.log('Il dado ha lanciato' + ' ' + risultato))
    .catch(err => console.error(err));


// SNACK 2 BONUS

const creaLanciaDado = () => {
    let ultimoLancio = null;
    return function () {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.2) {
                    ultimoLancio = null;
                    reject("Ops.. il dado si è incastrato")
                } else {
                    const risultato = Math.floor(Math.random() * 6) + 1;
                    if (risultato === ultimoLancio) {
                        console.log('INCREDIBILE')
                    }
                    ultimoLancio = risultato;
                    resolve(risultato)
                }
            }, 1000)
        })
        return promessa
    }
}

const lanciaDado2 = creaLanciaDado()

lanciaDado2()
    .then(risultato => console.log('Il dado2 ha lanciato' + ' ' + risultato))
    .catch(err => console.error(err));

lanciaDado2()
    .then(risultato => console.log('Il dado2 ha lanciato' + ' ' + risultato))
    .catch(err => console.error(err));
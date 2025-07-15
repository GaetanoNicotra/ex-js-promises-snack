// SNACK 1

function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj))
            .catch(reject)
    })
    return promessa
}

getPostTitle(26).then(obj => console.log(obj))
    .catch(error => console.error(error))
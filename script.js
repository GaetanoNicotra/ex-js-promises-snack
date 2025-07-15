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
    .catch(error => console.error(error))
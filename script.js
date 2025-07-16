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
                        postData.user = userData;
                        resolve(postData);
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

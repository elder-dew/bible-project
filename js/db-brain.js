db.collection('players').get().then((snapshot) => {
    console.log(snapshot.docs)
})
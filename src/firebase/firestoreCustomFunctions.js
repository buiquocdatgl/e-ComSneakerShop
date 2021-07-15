import {db} from './firebase'

const sneakersCollection = db.collection('sneakers') // xuất và sử dụng database (firestore)

const addToFS = (collection, product) => {
    collection.add(product).then(doc => {
        return collection.doc(doc.id).set({
            uid: doc.id
        }, {merge:true});
    }).catch(err => {
        console.log(err);
    })
}

const addProduct = (product) => {
    addToFS(sneakersCollection, product)
}

export {addProduct};
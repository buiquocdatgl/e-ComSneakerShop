import { db } from "../firebase/firebase";


const getSneakers = async() => {db.collection('sneakers').get().then(async (docs) => {
    const newdata = await docs.forEach(doc => {
        return doc.data()
    })
    return newdata
})}

export {getSneakers}
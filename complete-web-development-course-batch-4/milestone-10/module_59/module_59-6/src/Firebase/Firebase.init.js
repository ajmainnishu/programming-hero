import {initializeApp} from 'firebase/app'
import firebaseConfig from './Firebase.config'





const initializeAuthencication = () => {
    initializeApp(firebaseConfig)
}





export default initializeAuthencication
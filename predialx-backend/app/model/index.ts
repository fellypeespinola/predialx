import { database } from '../infrastructure/database/db'
import './users'
import './order'

(async () => {
    try {
        await database.sync();
        console.log('Models has loaded with success');
    } catch (error) {
        console.log(error);
    }
})();
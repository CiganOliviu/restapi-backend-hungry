import mongoose from 'mongoose';
import { configurations } from './configurations/configurations';

async function setupDatabase() {
    const dbUrl = configurations.dbUrl as string;

    try {
        await mongoose.connect(dbUrl).then(() => {
            console.log(`DB connected to ${dbUrl}`);
        });
    } catch (error) {
        console.log(error);
    }
}

export default setupDatabase;
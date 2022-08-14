import axios from 'axios';
import { User } from './models/User';

const user = new User({id: 1, name: 'new nam2e', age: 311 });

user.on('change', () => {
    console.log(user);
})

user.save()
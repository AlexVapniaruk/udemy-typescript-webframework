import axios from 'axios';
import { User } from './models/User';

const user = new User({name: 'N2ew record', age: 300});

user.sync.save({name: 'New record', age: 300});
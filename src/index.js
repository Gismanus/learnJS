import Post from './Post';
import json from './assets/json';
import xml from './assets/data.xml';
import logo from './assets/logo.png';
import './styles/style.css';

const post = new Post ('Webpack Post Title', logo);

console.log('Post to string', post.toString());

console.log('JSON', json);
console.log('XML', xml);
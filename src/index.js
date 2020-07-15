import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
// import xml from './assets/data.xml';
import logo from '@/assets/logo.png';
import './styles/style.css';

const post = new Post ('Webpack Post Title', logo);
$('pre').html(post.toString())

//console.log('Post to string', post.toString());

// console.log('JSON', json);
// console.log('XML', xml);
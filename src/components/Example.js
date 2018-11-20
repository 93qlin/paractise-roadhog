import React from 'react';
import axios from 'axios'
// import styles from './Example.css'
// import './Example.css'
import './Example.less'
const Example = () => {
  return (
    <div>
      <p>Example</p>
      <h3>黄色</h3>
      <button onClick={() => {axios.get('http://jsonplaceholder.typicode.com/users')}}>普通请求</button>
      <button onClick={() => {axios.get('/api/users')}}>请求代理</button>
    </div>
  );
};

Example.propTypes = {
};

export default Example;

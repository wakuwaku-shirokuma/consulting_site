//export default App;
import React, { Component } from 'react';

import MainLogin from './top/main_login';
import Footer from './top/footer';

export default class App extends Component {

  render() {
    return (
      <div>
        {/*ナビゲーション*/}
        <nav style={{ background: "#666" }}>
          <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li style={{ margin: 10 }}><a href="/" style={{ color: "#fff", textDecoration: 'none' }}>管理画面ログイン画面</a></li>
            {/*}<li style={{ margin: 10 }}><a href="/" style={{ color: "#fff", textDecoration: 'none' }}>Home</a></li>*/}
            {/*}<li style={{ margin: 10 }}><a href="/about" style={{ color: "#fff", textDecoration: 'none' }}>About</a></li>*/}
          </ul>
        </nav>
        {/*メインコンテンツ*/}
        <MainLogin />
        {/*フッター*/}
        <Footer />
      </div>
    );
  }
}

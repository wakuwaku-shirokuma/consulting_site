//export default App;
import React, { Component } from 'react';

export default class MainLogin extends Component {

  render() {
    return (
      <div>
        {/*メインコンテンツ*/}
        <h1>Top#login</h1>
        <p>Find me in app/views/admin/login.html.erb</p>
        <p>
          <a href="/admin/top">管理画面の一覧ページへ</a>
        </p>
      </div>
    );
  }
}

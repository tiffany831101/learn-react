import React, {
  Component
} from 'react';
import {
  Checkbox, Radio, Table, Icon
} from 'antd';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import reqwest from 'reqwest';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const columns = [{
  title: '賽事',
  dataIndex: 'league',
  key: 'league',
}, {
  title: '時間',
  dataIndex: 'matchTime',
  key: 'matchTime',
}, {
  title: '主隊',
  dataIndex: 'home',
  key: 'home',
}, {
  title: '全場比分',
  dataIndex: 'score',
  key: 'score',
}, {
  title: '客隊',
  dataIndex: 'guest',
  key: 'guest',
}, {
  title: '半場比分',
  dataIndex: 'halfScore',
  key: 'halfScore',
}];


class App extends Component {
  state = {
    data: []
  };
  fetch = () => {
    reqwest({
      url: '/public/worldcup_2018.json',
      method: 'get',
      type: 'json',
    }).then((data) => {
      this.setState({
        data: data.results,

      });
    });
  }
  componentDidMount() {
    this.fetch();
  }

  render() {
    console.log(this.state.data);
    return (<div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">World Cup 2018 </a>
        </div>

      </nav>
      <div className="container mt-3">
        <div className="filter my-3">
          <Checkbox>顯示紅牌</Checkbox>
          <Checkbox>顯示黃牌</Checkbox>
          <RadioGroup defaultValue={1}>
            <RadioButton value={0}>簡體</RadioButton>
            <RadioButton value={1}>繁體</RadioButton>
            <RadioButton value={2}>English</RadioButton>
          </RadioGroup>

        </div>

        <Table columns={columns} dataSource={this.state.data} size="middle" pagination={false} />
      </div>
    </div>
    );
  }
}

export default App;
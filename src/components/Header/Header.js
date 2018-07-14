import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  state = {
    activeKey: 'home',
  };

  componentDidMount() {
    this.setState({ activeKey: this.props.location.pathname });
  }

  handleRedirectPath = e => {
    const link = e.key;
    this.props.history.push(`${link}`);
    this.setState({ activeKey: link });
  };

  render() {
    return (
      <section className="Header-section">
        <Row>
          <Col span={6}>
            <Menu
              mode="horizontal"
              onClick={this.handleRedirectPath}
              selectedKeys={[this.state.activeKey]}
            >
              <Menu.Item key="/home">
                <Icon type="home" />
                Home
              </Menu.Item>
            </Menu>
          </Col>

          <Col span={6}>
            <Menu
              mode="horizontal"
              onClick={this.handleRedirectPath}
              selectedKeys={[this.state.activeKey]}
            >
              <Menu.Item key="/users">
                <Icon type="user" />
                Users
              </Menu.Item>
            </Menu>
          </Col>

          <Col span={6}>
            <Menu
              mode="horizontal"
              onClick={this.handleRedirectPath}
              selectedKeys={[this.state.activeKey]}
            >
              <Menu.Item key="/photos">
                <Icon type="picture" />
                Photos
              </Menu.Item>
            </Menu>
          </Col>

          <Col span={6}>
            <Menu
              mode="horizontal"
              onClick={this.handleRedirectPath}
              selectedKeys={[this.state.activeKey]}
            >
              <Menu.Item key="/comments">
                <Icon type="exception" />
                Comments
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </section>
    );
  }
}

export default withRouter(Header);

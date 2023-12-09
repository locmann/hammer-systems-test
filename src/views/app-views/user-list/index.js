import React, { Component } from 'react';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import {
  EyeOutlined,
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from 'assets/data/user-list.data.json';
import { getUserData } from '../../../api/usersApi';
import axios from 'axios';
import { useHistory, withRouter } from 'react-router-dom';
import Loading from '../../../components/shared-components/Loading';

export class UserList extends Component {
  state = {
    users: null,

    userProfileVisible: false,
    selectedUser: null,
  };

  getUsers = async () => {
    const response = axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    const data = (await response).data;
    this.setState({
      users: data,
    });
  };
  componentDidMount() {
    this.getUsers();
  }

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({
      content: `Deleted user ${userId}`,
      duration: 2,
    });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  routeChange = (userInfo) => {
    const { history } = this.props;

    history.push({
      pathname: '/app/clients/settings',
      state: userInfo,
    });
  };

  render() {
    const { users, userProfileVisible, selectedUser } = this.state;

    const tableColumns = [
      {
        title: 'User',
        dataIndex: 'name',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Username',
        dataIndex: 'username',
        sorter: {
          compare: (a, b) => a.username.length - b.username.length,
        },
      },
      {
        title: 'Phone number',
        dataIndex: 'phone',
        render: (phone) => <span>{phone} </span>,
        sorter: {
          compare: (a, b) => a.phone.length - b.phone.length,
        },
      },
      {
        title: 'City',
        dataIndex: ['address', 'city'],
        render: (status) => <span>{status}</span>,
        sorter: {
          compare: (a, b) => {
            a = a.address.city.toLowerCase();
            b = b.address.city.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="Edit">
              <Button
                className="mr-2"
                icon={<EditOutlined />}
                onClick={() => {
                  this.routeChange(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    return (
      <>
        {users === null ? (
          <Loading cover="content" />
        ) : (
          <Card bodyStyle={{ padding: '0px' }}>
            <Table
              columns={tableColumns}
              dataSource={users}
              rowKey="id"
            />
            <UserView
              data={selectedUser}
              visible={userProfileVisible}
              close={() => {
                this.closeUserProfile();
              }}
            />
          </Card>
        )}
      </>
    );
  }
}

export default withRouter(UserList);

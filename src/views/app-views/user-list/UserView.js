import React, { Component } from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import {
  MobileOutlined,
  MailOutlined,
  UserOutlined,
  CompassOutlined,
  CalendarOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  GlobalOutlined,
  RadarChartOutlined,
} from '@ant-design/icons';

export class UserView extends Component {
  render() {
    const { data, visible, close } = this.props;
    return (
      <Drawer
        width={300}
        placement="right"
        onClose={close}
        closable={false}
        visible={visible}
      >
        <div className="text-center mt-3">
          <h3 className="mt-2 mb-0">{data?.name}</h3>
        </div>
        <Divider dashed />
        <div className="">
          <h6 className="text-muted text-uppercase mb-3">
            Данные пользователя
          </h6>
          <p>
            <UserOutlined />
            <span className="ml-3 text-dark">id: {data?.id}</span>
          </p>
          <p>
            <RadarChartOutlined />
            <span className="ml-3 text-dark">
              Сайт: <a>{data?.website}</a>
            </span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Контакты</h6>
          <p>
            <MobileOutlined />
            <span className="ml-3 text-dark">{data?.phone}</span>
          </p>
          <p>
            <MailOutlined />
            <span className="ml-3 text-dark">
              {data?.email ? data?.email : '-'}
            </span>
          </p>
          <p>
            <CompassOutlined />
            <span className="ml-3 text-dark">
              {data?.address.city}, {data?.address.street}
            </span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">
            О компании
          </h6>
          <p>
            Название: <b>{data?.company.name}</b>
          </p>
          <p>
            Слоган: <b>{data?.company.catchPhrase}</b>
          </p>
          <p>
            Вид деятельности: <b>{data?.company.bs}</b>
          </p>
        </div>
      </Drawer>
    );
  }
}

export default UserView;

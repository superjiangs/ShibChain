/* eslint-disable no-unused-vars */
import React from 'react';
import { connect, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import setting from '../../assets/setting.svg';
import readme from '../../assets/readme.svg';
import styles from './index.less';
import UserInfoHader from '@/components/UserInfoHader';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = (props) => {
  const { theme, layout, userInfo } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <div className={styles.setting}>
        <img src={setting} />
      </div>
      <a
        style={{
          color: 'inherit',
        }}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.action}
      >
        <img src={readme} />
      </a>
      <UserInfoHader userInfo={userInfo} />
      {/* <Avatar /> */}
      {/* {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )} */}
      {/* 多语言 */}
      {/* <SelectLang className={styles.action} /> */}
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);

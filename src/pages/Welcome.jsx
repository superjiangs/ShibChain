/* eslint-disable no-unused-vars */
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import Accounts from '@/pages/Accounts';
import styles from './Welcome.less';
import 'animate.css';


export default () => {
  const intl = useIntl();
  return (
    <Accounts />
  );
};

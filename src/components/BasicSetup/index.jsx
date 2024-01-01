import React, { useState, useEffect, useMemo, useRef } from 'react';
import styles from './index.less';

// owner用户 走 BasicSetup；admin用户直接进入操作台
const BasicSetup = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return (
    <div className={`animate__animated animate__fadeIn ${styles.basicSetup}`}>
      <div>BasicSetup</div>
    </div>
  );
};

export default BasicSetup;

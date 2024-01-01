/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/no-redundant-should-component-update */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-constant-condition */
import React, { createElement, Component } from 'react';
import classNames from 'classnames';
// classNames({ name: true, name2: false })  ==> 'name'
import PropTypes from 'prop-types';
import config from './config';
import styles from './index.less';
/**
 * 模版组件
 * @description 模版组件
 * @class Persion
 * @extends {Component}
 * @author: unicom
 *
 */
class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @description:  它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()
   *                初始化数据后，但是还未渲染DOM时。
   */
  componentWillMount() {}

  /**
   * @description:  组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，
   *                返回数据setState后组件会重新渲染
   */
  componentDidMount() {}

  /**
   * @description:  父组件改变后的props进行渲染
   */
  componentWillReceiveProps(newProps) {}

  /**
   * @description:  主要用于性能优化(部分更新) return false可以阻止组件的更新
   */
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  /**
   * @description:  shouldComponentUpdate返回true 组件进入重新渲染的流程
   */
  componentWillUpdate(newProps, newState) {}

  /**
   * @description:  react只会在第一次初始化成功会进入componentDidmount,
   *                之后每次重新渲染后都会进入这个生命周期
   */
  componentDidUpdate(newProps, newState) {}

  /**
   * @description:  清除 setTimeout,setInterval 和一些监听事件  removeEventListener
   */
  componentWillUnmount() {}

  /**
   * @description: 临时事件
   * @param {string} name 姓名
   * @return {undefined}
   */
  handleTempEvent = (name = '') => {
    console.log(name);
    this.props.optionalFunc();
  };

  /**
   * @description: 临时事件
   * @param {string} name 姓名
   * @return {undefined}
   */
  onEvent = (name = '') => {
    this.props.optionalFunc();
  };

  /**
   * @description: 临时事件
   * @param {string} name 姓名
   * @return {undefined}
   */
  getEvent = (name = '') => {
    this.props.optionalFunc();
  };

  /**
   * @description: 临时事件
   * @param {string} name 姓名
   * @return {undefined}
   */
  renderEvent = (name = '') => {
    this.props.optionalFunc();
  };

  render() {
    return (
      <div className={styles.parent}>
        <span onClick={this.handleTempEvent}>Hello World</span>
      </div>
    );
  }
}

// 组件外和内部同时设置propTypes defaultProps的时候以外部为准
Template.propTypes = {
  /**
   * optionalString
   */
  optionalString: PropTypes.string,
  /**
   * optionalNumber
   */
  optionalNumber: PropTypes.number,
  /**
   * optionalObject
   */
  optionalObject: PropTypes.object,
  /**
   * optionalSymbol
   */
  optionalSymbol: PropTypes.symbol,
  /**
   * optionalArray
   */
  optionalArray: PropTypes.array,
  /**
   * optionalBool
   */
  optionalBool: PropTypes.bool,
  /**
   * 事件回调
   */
  optionalFunc: PropTypes.func,
  /**
   * optionalMulti
   */
  optionalMulti: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * optionalMulti
   */
  optionalNode: PropTypes.node,
};

Template.defaultProps = {
  optionalString: '',
  optionalNumber: 1,
  optionalObject: {},
  optionalSymbol: Symbol(1),
  optionalArray: [],
  optionalBool: false,
  optionalFunc: () => {},
  optionalMulti: 1,
  optionalNode: 0,
};

export default Template;

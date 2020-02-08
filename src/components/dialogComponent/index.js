
import React, { PureComponent } from 'react';
import { Modal } from 'antd';

export default class Index extends PureComponent {
  render () {
    const {
      title, 
      contents, 
      visible, 
      onOk = () => {}, 
      onCancel = () => {},
      width = 400,
      footer,
      maskClosable = false,
      style = {}
    } = this.props;
    return (
      <Modal
        style={style}
        destroyOnClose={true}
        maskClosable={maskClosable}
        title={title}
        footer={footer}
        okText={'保存'}
        visible={visible}
        onOk={onOk}
        width={width}
        onCancel={onCancel}>
        {contents}
      </Modal>
    );
  }
}

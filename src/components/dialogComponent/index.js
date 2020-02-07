
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
      maskClosable = false
    } = this.props;
    return (
      <Modal
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

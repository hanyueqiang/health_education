import React, { PureComponent } from 'react';
import { Upload, Icon, message } from 'antd';

export default class Index extends PureComponent {
  state = {
    loading: false
  }

  beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  handleChange = info => {
    const { uploadDoneChange } = this.props;
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.setState({ loading: false });
      let response = info.file.response;
      if (response.code === 0) {
        uploadDoneChange(response.data)
      } else {
        message.error(response.msg);
      }
    }
  };

  render() {
    const { filename = "file", style, fileSrc } = this.props;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <Upload
        name={filename}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/smart_ward_admin/restapi/v1/file/upload"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {fileSrc ? <img src={fileSrc} alt="file" style={{ width: '100%', ...style }} /> : uploadButton}
      </Upload>
    );
  }
}
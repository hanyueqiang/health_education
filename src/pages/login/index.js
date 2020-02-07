
import { PureComponent } from 'react';
import { connect } from 'dva';
import Login from './components/Login';
import { message, Row, Col } from 'antd';
import styles from './index.less';
const loginImg = require('@/assets/loginpic.png');
const logoTitle = require('@/assets/logotitle.png');

@connect(
  ({ login }) => ({
    ...login
  })
)
class Index extends PureComponent {
  componentDidMount() {
    const { location: { query = {} } } = this.props;
    if (query.status === '1') {
      message.warning('用户未登录，请登录后访问！');
    }
  }
  handleSubmit = (err, values) => {
    for (const name in values) {
      if (values[name] === undefined) {
        message.error('用户名或密码错误！');
        return false;
      }
    }
    this.props.dispatch({
      type: 'login/login',
      payload: {
        ...values
      },
    });
  };
  render() {
    const { loading, isError } = this.props;
    return (
      <div className={styles.content}>
        <div className={styles.login}>
          <div>
            <img src={loginImg} alt="" height='400' width='420' />
          </div>
          <div className={styles.loginRight}>
            <div className={styles.loginContent}>
              <Row>
                <Col span={24} className={styles.logo}>
                <img alt="logo" src={logoTitle} />
              </Col>
              </Row>
              <Login onSubmit={this.handleSubmit} loading={loading} isError={isError} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default Index;
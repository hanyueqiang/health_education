import { Component } from 'react';
import { Layout } from 'antd';
import styles from './index.less';

const { Content } = Layout;
class Index extends Component {
	render() {
		const { children } = this.props;
		return (
			<Layout className={styles.container}>
				<Content className={styles.content}>
					{children}
				</Content>
			</Layout>
		);
	}
}
export default Index;
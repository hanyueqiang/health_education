import { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Layout } from 'antd';
// import FooterView from './Footer';
import MainMenu from './menus';
import ContentHeader from './header';

import styles from './index.less';
const logo = require('@/assets/logobg.png');

const { Header, Sider, Content } = Layout;

class Platform extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			// 侧边栏状态
			collapsed: false,
			// 系统主题
			theme: 'light',
			// 菜单主题
			menuTheme: 'dark',
			defaultKey: 'table'
		};
	};

	componentDidMount() {
		// 判断是否登录
		const isLogin = sessionStorage.getItem('isLogin');
		if (isLogin === 'false') {
			router.push('/login?status=1');
			return;
		}
	}
	// componentDidUpdate(prevProps) {
	//     if (this.props.location !== prevProps.location) {
	//         window.scrollTo(0, 0);
	//     }
	// }

	componentWillUnmount() {

	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	handleSetting = (param) => {
		const { dispatch } = this.props;
		const { key, state } = param;
		if (key === 'logout') {
			dispatch({
				type: "global/logout",
				payload: {
					...state,
				},
			});
		}
	}


	render() {
		const { location } = this.props;
		const { defaultKey } = this.state;
		return (
			<Layout style={{ height: '100%' }}>
				<Header className={styles.header}>
					<div style={{ paddingLeft: 20 }}>
						<img src={logo} alt="" height='40' width='280' style={{marginBottom: 5}}/>
					</div>
					<ContentHeader handleSetting={this.handleSetting} />
				</Header>
				<Layout style={{ padding: 10 }}>
					<Sider width={134} style={{ background: '#fff' }}>
						<MainMenu location={location} defaultKey={defaultKey} />
					</Sider>
					<Layout style={{ paddingLeft: 10 }}>
						{/* <Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb> */}
						<Content
							className={styles.content}
							style={{
								padding: '24px 20px',
								background: '#fff',
								minHeight: 280,
								overflow: 'auto'
							}}
						>
							{this.props.children}
						</Content>
					</Layout>

				</Layout>
				{/* <FooterView /> */}
			</Layout>
		);
	}
}

export default connect(({ global, menu, }) => {
	return {
		...global,
		menu
	};
})(Platform);
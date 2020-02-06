
import * as api from '../services';
// import { message } from 'antd';

export default {
	namespace: 'eduPlan',
	state: {
		rowKey: 'bedId',
		dataSource: [
			{
				bedId: 1,
				name: '张三',
				sex: '男',
				depart: '呼吸内科',
				quart: '三区',
				content: '大丰收'
			}
		],
		loading: false,
		pagination: {
			pageSize: 10,
			current: 1,
			total: 0
		},
		departSource: [
			{
				id: 1001,
				name: '呼吸内科'
			},
			{
				id: 1002,
				name: '胸外科'
			},
			{
				id: 10003,
				name: '神经内科'
			}
		],
		departVal: '',
		wardSource: [
			{
				id: 101,
				name: '一病区'
			},
			{
				id: 102,
				name: '六病区'
			}
		],
		wardVal: '',
		eduContentsSource: [
			{
				id: 10001,
				name: '内容一'
			},
			{
				id: 10002,
				name: '内容二'
			}
		],
		eduContentsVal: ''
	},
	effects: {
		*getEatingList({ payload }, { call, put, select }) {
			const { pagination, searchContent } = yield select(state => state.eating);
			yield put({
				type: 'save',
				payload: {
					loading: true
				}
			});
			const params = {
				content: searchContent,
				page: pagination.current,
				limit: pagination.pageSize
			};
			const result = yield call(api.getEatingList, params);
			const { data, code } = result;
			yield put({
				type: 'save',
				payload: {
					loading: false
				}
			});
			if (code === 0) {
				yield put({
					type: 'save',
					payload: {
						dataSource: data.list,
						pagination: {
							...pagination,
							total: data.totalCount
						}
					}
				});
			}
		},
	},
	reducers: {
		save(state, action) {
			return { ...state, ...action.payload };
		},
		clearAttributes(state) {
			return {
				...state,
				food: ''
			};
		}
	},
};

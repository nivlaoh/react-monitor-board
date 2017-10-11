import expect from 'expect.js';
import reducer from './DashboardReducers';
import actions from './DashboardActions';

describe('dashboard reducer', () => {
	describe('load', () => {
		const load = actions.load();
		const initialState = false;

		const result = reducer(initialState, load);

		it('should load', () => {
			expect(result).toBe(true);
		});
	});
});
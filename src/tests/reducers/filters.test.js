import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('shoudl setup default filter values',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('shoudl set sort by to amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortBBy to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action={type:'SORT_BY_DATE'};
    const state=filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
})

test('shoudl set text filter',()=>{
    const state=filtersReducer(undefined,{type:'SET_TEXT_FILTER',
        text:'hello'});
    expect(state.text).toBe('hello'); 
})

test('shoudl set startdate filter',()=>{
    const startDate=moment();
    const state=filtersReducer(undefined,{type:'SET_START_DATE',
        startDate});
    expect(state.startDate).toEqual(startDate);
})

test('should set endate filter',()=>{
    const endDate=moment();
    const state=filtersReducer(undefined,{type:'SET_END_DATE',
        endDate});
    expect(state.endDate).toEqual(endDate);
})
import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})

test('shoudl set end date',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test('shoudl set text filter',()=>{
    const action=setTextFilter('hello');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'hello'
    })
})

test('shoudl set text filter without values',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('shoudl set sort by date',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('shoudl set sort by amount',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should not remove expense if id not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:-1
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})

test('should add an expense',()=>{
    const action={
        type:'ADD_EXPENSE',
        expense:{
            description:'hello',
            id:4,
            amount:50,
            createdAt:1000,
            note:''
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2],
        action.expense]);
})

test('should edit expense',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount:1250
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],{
        description:expenses[1].description,
        amount:1250,
        id:expenses[1].id,
        createdAt:expenses[1].createdAt,
        note:expenses[1].note    
    
        },expenses[2]]);
})

test('should not edit when id not found',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:-5,
        updates:{
            amount:1250
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);

})


import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense=({description='',note='',amount=0,createdAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})

const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter=(text='')=>({
    type:'Set_Text_Filter',
    text
});

const sortByDate=()=>({
    type:'Sort_By_Date'
});

const sortByAmount=()=>({
    type:'Sort_By_Amount'
});

const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
});

const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})

const expensesReducerDeafaultState=[];

const expensesReducer=(state=expensesReducerDeafaultState,action)=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id!==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }

};

const filtersReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}



const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'Set_Text_Filter':
            return {
                ...state,
                text:action.text
            };
        case 'Sort_By_Amount':
            return {
                ...state,
                sortBy:'amount'
            };
        case 'Sort_By_Date':
            return {
                ...state,
                sortBy:'date'
            };
        case 'SET_START_DATE':
            return{
            ...state,
                startDate:action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }        
        default:
            return state;
    }
};

const getVisibleExpense=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number' || 
            expense.createdAt>=startDate;
        const endDateMatch=typeof endDate!=='number' ||
             expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(
                text.toLowerCase()
            );

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1;
        }else if(sortBy==='amount'){
                return a.amount<b.amount?1:-1;
            }
        
    });
};

const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer

    })
);

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpense(state.expenses,
        state.filters);
    console.log(visibleExpenses);
    console.log(state);})

const expenseOne=store.dispatch(addExpense({
    description:'rent',amount:100, createdAt:-21000}));

const expenseTwo=store.dispatch(addExpense({
    description:'coffee',amount:300,createdAt:-221000}));

// const expenseThree=store.dispatch(addExpense({description:'tea',amount:100}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(removeExpense({id:expenseTwo.expense.id}));

// store.dispatch(editExpense(expenseThree.expense.id,{amount:1000}));

// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// 
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(999));

const demoState={
    expenses:[{
        id:'ereererrf',
        description:'january rent',
        note:'this was the final payment',
        amount:2000000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
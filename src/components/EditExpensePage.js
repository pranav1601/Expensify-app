import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expenses'; 

const EditExpensePage=(props)=>{
    // console.log(props);
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.expense.id,expense));
                    
                    console.log(expense);
                }}/>
            <button onClick={()=>{
                props.dispatch(removeExpense({id:props.expense.id}));
                props.history.push('/');
                }}>
                remove
                
            </button>
    
        </div>
    );

};

const mapToState=(state,props)=>{
    return{
        expense: state.expenses.find((expense)=>{
            return expense.id===props.match.params.id;
        })
    };
}
export default connect(mapToState)(EditExpensePage);
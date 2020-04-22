import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem=({dispatch,description,amount,createdAt,id})=>(
    <div>
        <Link to={'edit/'+id}>
            <h3>{description}</h3>
        </Link>
        
        <p>Rs.{numeral(amount).format('Rs0,0.00')}- {moment(createdAt).format('MMMM D0, YYYY')}</p>
    </div>
);

export default (ExpenseListItem);
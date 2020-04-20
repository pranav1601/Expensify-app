import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>the info is:{props.info}</p>
    </div>
);

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>private info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo=withAdminWarning(Info);

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated?(<WrappedComponent {...props} />):
            (<p>please login</p>)}
        </div>
    )
};

const AuthInfo=requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Details"/>,document.getElementById('app'));
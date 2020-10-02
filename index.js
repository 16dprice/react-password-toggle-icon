import React from 'react';
import App from './src/app';
import ReactDOM from 'react-dom';
const Index = (props) => {
    let inputRef = React.createRef();
    return (
        <div>
            <input ref={inputRef} type="password" placeholder="password" />
            <App inputRef={inputRef} {...props}/>
        </div>
    );
};  

ReactDOM.render(<Index />, document.getElementById('root'));
// export default Index;
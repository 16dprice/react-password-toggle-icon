import React from 'react';
import propTypes from 'prop-types';

const defaultStyle={
    width:"16px",
    height:"16px",
    position:"absolute",
    right:"10px",
    top:"0",
    bottom:"0",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
            isVisible: false
        }
    }
        
    handleClick(inputRef){
        this.setState({
            isVisible : !this.state.isVisible
        }, () => { 
        inputRef.current.getAttribute("type") === "password" ? 
        inputRef.current.setAttribute("type","text") :
        inputRef.current.setAttribute("type","password")
        })
    }
    render(){
        const {
            showIcon,
            hideIcon,
            inputRef,
            style
        } = this.props;
        const {isVisible} = this.state;
        return (
            <div onClick={() => this.handleClick(inputRef)} style={{...defaultStyle,...style}}>
                {!isVisible ?  hideIcon : showIcon}
            </div>
        );
    }
}

export default App;

App.defaultProps = {
    showIcon:"Hide",
    hideIcon:"Show"
}
App.propTypes = {
    showIcon:propTypes.oneOfType([propTypes.string,propTypes.func]).isRequired,
    hideIcon:propTypes.oneOfType([propTypes.string,propTypes.func]).isRequired

}
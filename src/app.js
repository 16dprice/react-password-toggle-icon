import React from 'react';
import propTypes from 'prop-types';

const defaultStyle={
    width:"auto",
    height:"auto",
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
    componentDidMount(){
        this.props.isVisible ?
        this.setState({
            isVisible:this.props.isVisible
        }) : null;
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
            style,
            parentClassName
        } = this.props;
        console.log(typeof inputRef);
        const {isVisible} = this.state;
        return (
            <div className={"react-password-toggle-icon-wrapper"+" "+parentClassName} onClick={() => this.handleClick(inputRef)} style={{...defaultStyle,...style}}>
                {!isVisible ?  hideIcon : showIcon}
            </div>
        );
    }
}

export default App;

App.defaultProps = {
    showIcon:"Hide",
    hideIcon:"Show",
    inputRef:"",
    parentClassName: "",
    isVisible:"false"
}
App.propTypes = {
    showIcon:propTypes.oneOfType([propTypes.string,propTypes.func]).isRequired,
    hideIcon:propTypes.oneOfType([propTypes.string,propTypes.func]).isRequired,
    inputRef:propTypes.object.isRequired,
    parentClassName: propTypes.string,
    isVisible:propTypes.bool
}
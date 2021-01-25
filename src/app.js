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

        const {isVisible} = this.state;
        const hideVal = typeof hideIcon === "string" ? hideIcon : hideIcon();
        const showVal = typeof showIcon === "string" ? showIcon : showIcon();
        return (
            <div className={"react-password-toggle-icon-wrapper"+" "+parentClassName} onClick={() => this.handleClick(inputRef)} style={{...defaultStyle,...style}}>
                {!isVisible ?  hideVal : showVal}
            </div>
        );
    }
}

export default App;

App.defaultProps = {
    showIcon:"Show",
    hideIcon:"Hide",
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
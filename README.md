# react-password-toggle-icon

A lightweight package to toggle password visibility on click of the icon. you nee to pass hide-show icon and ref of input field that's it and this package will toggle password visibility.

# Usage

### Code

``` js

    <div style={{position:"relative"}}>
        <input ref={inputRef} type="password" placeholder="password" />
        <ReactPasswordToggleIcon inputRef={inputRef} {...props}/>
    </div>
```

as per above code you need to follow three steps:
- create div and give it position: relative css
- create input and give assign ref to it and place it in div which we have created in previous step
- now import react-password-toggle-icon place it in same div and pass inputRef prop whose value is set to inputfield ref

cheers!!


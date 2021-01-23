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

### Properties
-  **inputRef** - this is required props , here you need to supply ref of password input field as this prop val,
-  **showIcon** - default value for this field is "Show", but here you can pass cutsom funtion which return html of the image tag or icon tag or any icon or text which you want to show.
-  **hideIcon** - defaut value fot this fied is "Hide", here also you can provide callback function same as the showIcon if you want to render icon or something else as per your need.
    **here is snippet for your ref**
    ### Code

``` js
    const showIcon = () => <i class=""></i>;
    const hideIcon = () => <i class=""></i>;
    <ReactPasswordToggleIcon inputRef={inputRef} {...props}/>
```
-   **parentClassName** - if you want to add custom class to the icon parent div then you can use this props to pass classname,
-   **isVisible**: if you want to show password by default on then you can pass bool val true in this prop.

### Steps to integrate
as per above code you need to follow three steps:
- create div and give it position: relative css
- create input and give assign ref to it and place it in div which we have created in previous step
- now import react-password-toggle-icon place it in same div and pass inputRef prop whose value is set to inputfield ref

### Code Sandbox link
[a link](https://codesandbox.io/s/react-password-toggle-icon-forked-rd2xz)

Hope This package will help 😊

cheers 🥂!!


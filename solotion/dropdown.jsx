/*

Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
  in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also 
  have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)
  
  0. How are you today? 😊
  1. Please fix any obvious issues you see with the dropdown and then save your gist.
  2. Please then make improvements to the dropdown and then save your gist again.
  3. Consider the different ways that this dropdown might be used and what changes would
     be neccessary to make it more flexible.
  4. If we wanted to sync the dropdown selection to a server with this hypothetial "syncing library"
     `app.sync('PATCH', 'users/'+app.USER.id, { dropdown_1_state: {true,false} })` where would this be included? Should
     the state be read again from the server to show the dropdown open/closed on page load?
        
     -I will sync it to the ExampleNav and pass it as props component no need to 
            read again from the server to show the dropdown open/closed on page load.

  5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
     what changes should be made? (just a sentence or two or some code is ok).
        - we can change the toggle method to resolve the promise
  PS: No need to worry about CSS or about making it actually run.

 */

import React, {PureComponent} from 'react';

class Dropdown extends PureComponent {
    // fix the typo error constructor not constuctor
  constructor(props) {
      super(props) 
    this.state = {
      isOpen: false,
    } 

    // Binding this keyword 
    this.toggle = this.toggle.bind(this) 
  }

  toggle() {
    const {isOpen} = this.state;

    this.setState({isOpen: isOpen});
  }
  
  render() {
    const {isOpen} = this.state;
    const {label} = this.props;
    
    //fix typo error aria-expanded

    return (
            
      <div className="dropdown">

    
        <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expanded={isOpen} onClick={this.toggle}>{label}</button>

        <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`} aria-labelledby="dropdownButton" role="menu">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
    //add the constructor
    constructor(props) {
        super(props);
    
    }
    
  render() {
    // TODO implement me
    const {href, children} = this.props;

    //add return statment
    return(
    <a src={href}>{children}</a>
    )
  }
}

class ExampleNav extends PureComponent {
    
  render() {
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page6">Page 6</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}

export default ExampleNav;
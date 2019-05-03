import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postBubl } from '../actions';
import {Button, Input} from '../StyledComponents';

class InputBubl extends Component {
   state = {
      text: "",
      username: 'john smith'
   }

   handleChange = e => {
      this.setState({
         ...this.state,
         [e.target.name]: e.target.value
      })
   }

   addNewBublMessage = e => {
      e.preventDefault();
      if (this.state.text !== '') {
         this.props.postBubl(this.state, this.props.id);
      }
      this.setState({
         text: ""
      })
   }

   render() {    
      return (
         <form onSubmit={this.addNewBublMessage}>
            <Input
               name="text" 
               value={this.state.text} 
               onChange={this.handleChange}
               placeholder="Enter message"/>
            <Button type="submit">Add New Message</Button>
         </form>
      )
   }
}

const mapStateToProps = state => {
   return {
      postingBubls: state.postingBubls
   }
}

export default connect(mapStateToProps, {postBubl})(InputBubl);
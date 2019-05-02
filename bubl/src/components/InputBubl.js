import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postBubl } from '../actions';

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
      this.props.postBubl(this.state, this.props.id);
      this.setState({
         text: ""
      })
   }

   render() {    
      return (
         <form onSubmit={this.addNewBublMessage}>
            <input
               name="text" 
               value={this.state.text} 
               onChange={this.handleChange}
               placeholder="Enter message"/>
            <button type="submit">Add New Message</button>
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
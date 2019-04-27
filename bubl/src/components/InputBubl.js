import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postBubl } from '../actions';

class InputBubl extends Component {
   state = {
      text: "",
      username: this.props.username
   }

   handleChange = e => {
      this.setState({
         ...this.state,
         [e.target.name]: e.target.value
      })
   }

   addNewBubl = e => {
      e.preventDefault();
      this.props.postBubl(this.state);
      this.setState({
         text: ""
      })
   }

   render() {
      return (
         <form onSubmit={this.addNewBubl}>
            <input
               name="text" 
               value={this.state.text} 
               onChange={this.handleChange}
               placeholder="Enter new bubl message"/>
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
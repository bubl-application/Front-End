import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBubls } from '../actions';
import { Route, Link } from 'react-router-dom';
import Bubl from './Bubl';

class BublPage extends Component {

   componentDidMount() {
     const id = this.props.match.params.id;
      // later this will be a get request to get bubls for the specific school
     this.props.getBubls(id);    
   }

   render() {
      return (
         <div className="bubl-page">
         <h2>List of Bubls</h2>            
            {this.props.bubls.map((bubl, index) => (
              <>
                 <Link exact to="/bubl">{bubl.bublname}</Link> <div>( {bubl.hashtags.map(hashtag => (<>#{hashtag} </>))} )</div>
              </>
            ))}

            <Route exact path="/bubl" component={Bubl} />
         </div>
      )
   }
}
const mapStateToProps = state => {
   return {
      bubls: state.bubls,
      fetchingBubls: state.fetchingBubls
   }
}

export default connect(mapStateToProps, {getBubls})(BublPage);
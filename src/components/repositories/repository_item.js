import React, { Component } from 'react'
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import { 
	repoSwitch, 
	selectColor
} from '../../actions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { HuePicker, BlockPicker, GithubPicker, CirclePicker} from 'react-color'



class RepositoryItem extends Component {
	//active={repo.hookEnabled} // boolean // description // fullName
	// hookEnabled // name // private // webUrl // _id
	onToggleSwitch (repoID) {
		this.props.repoSwitch(repoID)
	}

	onColorButtonClick () {
		console.log('ACTION CREATOR', this.props.selectColor)
		console.log('REPO ITEM', this.props.repo)
	}

	  state = {
	    open: false,
	    color: '#fff', 
	  };

	  handleOpen = () => {
	    this.setState({open: true});
	  };

	  handleClose = () => {
	    this.setState({open: false});
	  };

 render() {
  
 }
}

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ repoSwitch, selectColor }, dispatch)
}

export default connect(null, mapDispatchToProps)(RepositoryItem)
/*
<div>
         	<HuePicker />
         </div>

         <div>
         	<BlockPicker />
         </div>
*/



// import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import Popover from 'material-ui/Popover';
// import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';

// export default class PopoverExampleSimple extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       open: false,
//     };
//   }

//   handleClick = (event) => {
//     // This prevents ghost click.
//     event.preventDefault();

//     this.setState({
//       open: true,
//       anchorEl: event.currentTarget,
//     });
//   };

//   handleRequestClose = () => {
//     this.setState({
//       open: false,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <RaisedButton
//           onClick={this.handleClick}
//           label="Click me"
//         />
//         <Popover
//           open={this.state.open}
//           anchorEl={this.state.anchorEl}
//           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
//           targetOrigin={{horizontal: 'left', vertical: 'top'}}
//           onRequestClose={this.handleRequestClose}
//         >
//           <Menu>
//             <MenuItem primaryText="Refresh" />
//             <MenuItem primaryText="Help &amp; feedback" />
//             <MenuItem primaryText="Settings" />
//             <MenuItem primaryText="Sign out" />
//           </Menu>
//         </Popover>
//       </div>
//     );
//   }
// }


// /**
//  * Dialog with action buttons. The actions are passed in as an array of React objects,
//  * in this example [FlatButtons](/#/components/flat-button).
//  *
//  * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
//  */








/*

<li className="repository__item">
				<div className="repository__item-content">
					<div className="repository__item-content-text">
						<span>{this.props.repo.fullName}</span>
					</div>
					<div className="repository__item-content-toggle">
						<Toggle 
							onClick={() => this.onToggleSwitch(this.props.repo._id) }
						/>
					</div>

					<div className="repository__item__content__extras">

						<div className="repository__item__tech">
							<Chip style={styles.chip}>
					          <Avatar size={32}></Avatar>
					          {this.props.repo.language}
					        </Chip>
						</div>

						<div className="repository__item__color__picker">
							<button onClick={() => this.onColorButtonClick() }className="repository__item__color__picker__button"></button>
						</div>

					</div>
					
				</div>
			</li>
		*/


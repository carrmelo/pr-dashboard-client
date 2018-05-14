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
import Popover from 'material-ui/Popover';

import { HuePicker } from 'react-color'

class RepositoryItem extends Component {
	
	state = {
		open: false,
		background: '#fff'
	};
	
	onColorButtonClick = (e) => {
	    e.preventDefault();
		const { currentTarget } = e

			this.setState({
		    	open: true,
		      	anchorEl: currentTarget,
		    });

		console.log('COLOR SELECT', this.state.color)
  	};

	handleRequestClose = () => {
		this.setState({
	    	open: false, 
	    });
	};

	handleColorChange = (e) => {
		console.log('***', e)
		this.setState({
			background: e.hex
		}, () => console.log(this.state.background))
	}

	onToggleSwitch (repoID) {
		this.props.repoSwitch(repoID)
	}

	render() {

		return (
			<li 
				className="repository__item"
				style={{borderLeft: `6px solid ${this.state.background}`}}
			>
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
				        <button
				          onClick={this.onColorButtonClick}
				          className="repository__item__color__picker__button"
				          label="Color"
				        />
				        <Popover
				          open={this.state.open}
				          anchorEl={this.state.anchorEl}
				          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
				          targetOrigin={{horizontal: 'left', vertical: 'top'}}
				          onRequestClose={this.handleRequestClose}
				        >
						<HuePicker 
							color={this.state.background}
							onChangeComplete={this.handleColorChange}
						/>
				        </Popover>
				    </div>

					</div>
				</div>
			</li>
		)
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

//   render() {
//     const actions = [
//       <FlatButton
//         label="Cancel"
//         primary={true}
//         onClick={this.handleClose}
//       />,
//       <FlatButton
//         label="Submit"
//         primary={true}
//         keyboardFocused={true}
//         onClick={this.handleClose}
//       />,
//     ];
//     return (
//       <div>
//         <RaisedButton label="Dialog" onClick={this.handleOpen} />
//         <Dialog
//           title="Dialog With Actions"
//           actions={actions}
//           modal={false}
//           open={this.state.open}
//           onRequestClose={this.handleClose}
//         >
//         </Dialog>
//       </div>
//     );
//   }
// }


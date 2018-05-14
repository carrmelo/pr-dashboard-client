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
		background: "#0bd8be"
	};
	
	onColorButtonClick = (e) => {
	    e.preventDefault();
		this.setState({ open: true, anchorEl: e.currentTarget });
  	};

	handleRequestClose = () => {
		this.setState({ open: false });
	};

	handleColorChange = (e) => {
		this.setState({ background: e.hex })
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



import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleRepository } from '../../actions'

import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import { 
	repoSwitch, 
	selectColor
} from '../../actions'

import { bindActionCreators } from 'redux'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Popover from 'material-ui/Popover';

import { HuePicker } from 'react-color'
import Collapsible from 'react-collapsible';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';

import Paper from 'material-ui/Paper';
import { authHeader } from '../../helpers/auth-header'

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
	
	//HOW HANDLE WHEN PASSING MANY ARGUMENTS
	handleColorChange (repoID, colorHex) {
		this.setState({ background: colorHex })

		console.log('ID', repoID, 'COLOR', colorHex)
		this.props.selectColor(repoID, colorHex)
	}

	onToggleSwitch (repoID) {
		this.props.repoSwitch(repoID)
	}

	renderPrivacy = () => {
		if (this.props.repo.private) {
			return (
				<div className="repository__item__privacy__status">
					<svg className="repository__item__privacy__icon">
						<use xlinkHref="./icons/sprite.svg#icon-social-github"></use>
					</svg>
				</div>
			)
		} else {
			return (
				<div className="repository__item__privacy__status">
					<svg className="repository__item__privacy__icon">
						<use xlinkHref="./icons/sprite.svg#icon-lock-closed-outline"></use>
					</svg>
				</div>
			)	
		}
	}

	handleCollapse = () => {
		return (
			<RaisedButton 
				disabled={this.props.repo.description ? false : true}
				backgroundColor="#0bd8be"
				style={{minWidth: "65px", backgroundColor: "transparent"}}
			>
				<div className="repository__extra__info__arrow">
					<svg className="repository__extra__info__arrow__icon">
						<use xlinkHref="./icons/sprite.svg#icon-arrow-down-outline"></use>
					</svg>
				</div>
			</RaisedButton>
		)
	}

	handleToggle = (id, action) => {
		const serverAction = action ? 'disable' : 'enable'
		this.props.toggleRepository(id, serverAction)
	}

	render() {
		return (
			<li 
				className="repository__item"
				style={{borderLeft: `6px solid ${this.state.background}`}}
			>
				<div className="repository__item-content">

					<div className="repository__item-content-text">
						<div className="repository__item__name__text">
							<span>{this.props.repo.fullName}</span>
						</div>
					</div>

					<div className="repository__item-content-toggle">
						<Toggle 
							toggled={this.props.active}
							onToggle={() => this.handleToggle(this.props.itemId, this.props.active)}
						/>
					</div>

					<div className="repository__item__content__extras">
						<div className="repository__item__description">
							<Collapsible trigger={this.handleCollapse()}>
								<div className="repository__item__description__text">
									{this.props.repo.description}
								</div>
							</Collapsible>
						</div>

						<div className="repository__item__pull__num">
							<span className="repository__item__pull__num__value">
								{this.props.pullnum}
							</span>
						</div>

						<div className="repository__item__tech">
							<Chip style={styles.chip}>
						         <Avatar size={32}></Avatar>
						         {this.props.repo.language}
						    </Chip>
						</div>

						{this.renderPrivacy()}

						<div className="repository__item__color__picker">
					        <RaisedButton
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
								<HuePicker color={this.state.background}
									onChangeComplete={(e) => this.handleColorChange(this.props.repo._id, e.hex)}
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
	return bindActionCreators({ 
		repoSwitch, selectColor, toggleRepository }, dispatch)
}

const mapStateToProps = (state) => {
	return {
		user: state.entities.users
	}
}

export default connect(null, mapDispatchToProps)(RepositoryItem)






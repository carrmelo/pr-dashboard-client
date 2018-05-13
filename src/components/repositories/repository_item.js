import React, { Component } from 'react'
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

class RepositoryItem extends Component {
	//active={repo.hookEnabled} // boolean
	// description
	// fullName
	// hookEnabled
	// name
	// private
	// webUrl
	// _id

	onToggleSwitch () {
		console.log(this.props.repo)
	}

	onColorButtonClick () {
		console.log('SELECT COLOR')
	}

	render() {
		return (
			<li className="repository__item">
				<div className="repository__item-content">
					<div className="repository__item-content-text">
						<span>{this.props.repo.fullName}</span>
					</div>
					<div className="repository__item-content-toggle">
						<Toggle 
							onClick={() => this.onToggleSwitch() }
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

export default RepositoryItem

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


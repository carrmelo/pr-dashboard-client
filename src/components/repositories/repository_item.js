import React, { Component } from 'react'
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

class RepositoryItem extends Component {
	
	componentWillMount() {
		//active={repo.hookEnabled} // boolean
		// description
		// fullName
		// hookEnabled
		// name
		// private
		// webUrl
		// _id
		console.log('***', this.props.repo)
	}

	languageLetterCreator(languageName) {
		
		return languageName
	}

	render() {
		return (
			<li className="repository__item">
				<div className="repository__item-content">
					<div className="repository__item-content-text">
						<span>{this.props.repo.fullName}</span>
					</div>
					<div className="repository__item-content-toggle">
						<Toggle />
					</div>

					<div className="repository__item__content__extras">

						<div className="repository__item__tech">
							<Chip style={styles.chip}>
					          <Avatar size={32}></Avatar>
					          {this.languageLetterCreator(this.props.repo.language)}
					        </Chip>
						</div>

						<div className="repository__item__color__picker">
							<button className="repository__item__color__picker__button">ON</button>
						</div>

					</div>
					
				</div>
				<Divider />
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


/*

<div className="repository__item__description">
	
</div>

<div className="repository__item__url">

</div>

*/


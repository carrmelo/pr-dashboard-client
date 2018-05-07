import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import {  } from '../actions';

import config from '../../config';
import PullRequestItem from './pullrequest_item';

const user = 'carrmelo';
// const repo = 'redux';

class PullRequestList extends Component {

  // componentDidMount () {
  //   this.props.repos.map(repo => {
  //     if (repo.active) {
  //       axios.get(`${config.baseServerUrl}/repos/${user}/${repo.name}/pulls`)
  //       .then(res => {
  //         console.log('axios', res.data);
  //         return this.setState({ pulls : res.data })
  //   });
  //     }
  //   })
  // }

  renderPullRequestItem (pulls) {
    console.log('pulls', pulls);
    
    return pulls.map(pull => {
      return (
        <div key={pull.id}>
          <PullRequestItem
            body={pull.body} 
            closed_at={pull.closed_at}
            comments_url={pull.comments_url} 
            commits_url={pull.commits_url} 
            issue_url={pull.issue_url} 
            state={pull.state} 
            title={pull.title} 
            updated_at={pull.updated_at} 
            user={pull.user.login}
            userUrl={pull.user.html_url}
          />
        </div>
      )
    })
  }


  render () {
    if (this.props.repos) {
      return this.props.repos.filter(repo => {
        if (repo.active) {
          console.log('repo', repo);  
          return (
            <div>
              {this.renderPullRequestItem(repo.pulls)}
            </div>
          )
        }
      })
    } else {
      return <p>Loading</p>
    }
  }
}

const mapStateToProps = ({ repos }) => ({
  repos
})

// const mapDispatchToProps = (dispatch) => ({
// })

export default connect(mapStateToProps/*, mapDispatchToProps*/)(PullRequestList);
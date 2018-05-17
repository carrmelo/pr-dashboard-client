import React, { Component } from 'react';
import moment from 'moment';

class PullRequestItem extends Component {
  render() {
    return (
      <a href={this.props.webUrl} target="_blank">
        <li
          className={
            'pullrequest__item ' +
            (this.props.seen ? '' : 'pullrequest__item__breathing')
          }
          style={{ borderLeft: `6px solid ${this.props.repository.color}` }}
        >
          <div className="pullrequest__item-content">
            <div className="pullrequest__item-content-text">
              <div className="pullrequest__item__name__text">
                <span>
                  {this.props.title} #{this.props.number}
                </span>
              </div>
              <div className="pullrequest__item__owner-picture">
                <img
                  src={this.props.user.picture}
                  alt={this.props.user.loginName}
                />
              </div>
              <div className="pullrequest__item__name__repo">
                <span>{this.props.repository.fullName}</span>
              </div>
            </div>

            <div className="pullrequest__item__owner" />

            <div
              className="pullrequest__item__content__extras"
              style={this.props.seen ? {} : { backgroundColor: 'transparent' }}
            >
              <div className="pullrequest__item__content__extras-created">
                <small>
                  Created: {moment(this.props.created_at, 'YYYYMMDD').fromNow()}
                </small>
              </div>
              <hr />
              <div className="pullrequest__item__content__extras-updated">
                <small>
                  Updated: {moment(this.props.updated_at, 'YYYYMMDD').fromNow()}
                </small>
              </div>
              <div className="pullrequest__item__content__extras-state">
                <small>State: {this.props.state}</small>
              </div>
              <div className="pullrequest__item__content__extras-state">
                <small>Comments: {this.props.comments}</small>
              </div>
            </div>
          </div>
        </li>
      </a>
    );
  }
}

export default PullRequestItem;

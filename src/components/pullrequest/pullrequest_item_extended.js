import React, { Component } from 'react';

class PullRequestItem extends Component {

  render() {
    console.log('PR', this.props.pullrequest)
    return (
      <div>
      
        PULL REQUEST

      </div>
    )
  }
}

export default PullRequestItem



// Object.keys(pulls).map(key => {
//   return (
//     <div key={pulls[key]._id}>
//       <PullRequestItem
//         repo={pulls[key].repository.name}
//         closed_at={pulls[key].closed_at}
//         merged_at={pulls[key].merged_at}
//         created_at={pulls[key].created_at}
//         updated_at={pulls[key].updated_at}
//         action={pulls[key].action}
//         title={pulls[key].title}
//         number={pulls[key].number}
//         state={pulls[key].state}
//         comment={pulls[key].comment}
//         comments={pulls[key].comments}
//       />
//     </div>
// )


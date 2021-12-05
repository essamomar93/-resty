// import React from 'react';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

export default function Results(myProps) {
  return (
    <section>
      <pre>{myProps.data ? JSON.stringify(myProps.data, undefined, 2) : null}</pre>
    </section>
  );
}

import React from "react";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    );
  }
}

export default HelloWorld;

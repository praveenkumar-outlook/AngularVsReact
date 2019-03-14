import * as React from "react";

class Security extends React.Component<any, any> {
  render() {
    const risk = "Template <script>alert('owned')</script> <b>Syntax</b>";
    function createMarkup() {
      return {__html: risk};
    }

    return (
      <div>
        <div>{risk}</div>
        <div dangerouslySetInnerHTML={createMarkup()}>
        </div>
      </div>
    );
  }
}

export default Security;

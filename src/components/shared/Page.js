import React, { PureComponent } from "react";
import Loader from "./Loader";

export default (Incoming) => {
  class PageComponent extends PureComponent {
    state = {
      isLoading: true,
      display: "none",
    };

    didRender = () => {
      setTimeout(() => {
        this.setState({
          isLoading: false,
          display: "block",
        });
      }, 750);
    };

    render() {
      const { isLoading, display } = this.state;
      return (
        <div>
          {isLoading ? <Loader show={isLoading} /> : null}
          <div style={{ display }}>
            <Incoming didRender={this.didRender} />
          </div>
        </div>
      );
    }
  }

  return PageComponent;
};

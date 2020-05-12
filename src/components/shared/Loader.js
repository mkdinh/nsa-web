import React from 'react';
import Loading from 'react-loading-spinkit';
import './Loader.module.less';

const Loader = props => (
  <div styleName="page-loader">
    <Loading show={props.show} name="line-scale-pulse-out-rapid" />;
  </div>
);

export default Loader;
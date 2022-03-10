import React from "react";
import { connect } from 'react-redux';
import { RootState } from 'store/store';

function mapStateToProps(state: RootState) {

  return {  };
}

export const CharacterTracker = connect(mapStateToProps)(() => {
  return (<div>a</div>)
});

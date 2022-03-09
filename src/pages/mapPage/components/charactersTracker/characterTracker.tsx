import React from "react";
import { connect } from 'react-redux';
import { RootState } from 'store/store';

function mapStateToProps(state: RootState) {
  const { map } = state;
  return { map };
}

export const CharacterTracker = connect(mapStateToProps)(() => {
  return (<div>a</div>)
});

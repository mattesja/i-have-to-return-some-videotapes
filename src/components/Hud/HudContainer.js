import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import { toUpdateTime } from 'state/actions/updateTime';

import Hud from 'components/Hud/Hud';

function mapStateToProps(state) {
  return {
    numDeaths: state.get('deaths'),
    numTapesCollected: state.get('numTapes'),
    numTapesTotal: state.get('numTapesTotal'),
    powerups: immutableToJs(state.get('powerups')),
    time: state.get('time'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTick() {
      dispatch(toUpdateTime());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hud);

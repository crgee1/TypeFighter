import { connect } from 'react-redux';
import GameEndMultiModal from './game_end_multi_modal';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const { myOwnWPM, enemyWPM, } = state.entities.game;
    return ({
        modalType: ownProps.type,
        currentUser: state.session.user,
        sessionWpm: state.entities.game.singleSessionWpm,
        myOwnWPM,
        enemyWPM,
    })
}

const mdp = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(GameEndMultiModal);
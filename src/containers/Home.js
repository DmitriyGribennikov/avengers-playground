import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { setDates } from '../actions/BaseActions'
import { moviesSelector } from '../selectors/MovieSelectors'


const mapStateToProps = state => {
    return {
        movies: moviesSelector(state),
        startDate: state.appReducer.startDate,
        endDate: state.appReducer.endDate
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    setDates
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)
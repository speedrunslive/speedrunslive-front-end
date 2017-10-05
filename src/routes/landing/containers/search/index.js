import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSearchResults, initiateSearch} from './actions';
import {debounce} from '../../../../utils';
import Search from '../../components/search';
import SearchResults from '../../components/searchResults';
import LoadingSpinner from '../../../../shared/components/loadingSpinner';
import {getSearchResultsSelector} from './selectors';

/**
 * SearchContainer - 
 * 
 */
class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {showResults: false}
    this.lazyfetchSearchResults = debounce(function(searchTerm) {
      this.setState({showResults: true});
      this.props.fetchSearchResults(searchTerm, 5);
    }, 700);
  }
  render() {
    return (
      <div className='search-container'>
        <Search onChange={this.handleInputChange.bind(this)} onBlur={this.handleInputBlur.bind(this)} placeholder={"Search Games or Players..."} />
        <LoadingSpinner isActive={this.props.isSearching} style={loadingStyle}/>
        <SearchResults searchResults={this.props.searchResults} showResults={this.state.showResults} />
      </div>
    );
  }
  handleInputChange(event) {
    const searchTerm = event.target.value.trim();
    if(searchTerm.length > 1) this.props.initiateSearch();
    this.lazyfetchSearchResults(event.target.value);
  }
  handleInputBlur(event) {
    setTimeout(()=>{this.setState({showResults: false})},100)
  }

}
function mapStateToProps(state) {
  return {
    isSearching: state.searchResults.isSearching || false,
    searchResults: getSearchResultsSelector(state)
  }
}

const loadingStyle = {position:'absolute', margin:'13px 2px'};

export default connect(mapStateToProps,{fetchSearchResults, initiateSearch})(SearchContainer);
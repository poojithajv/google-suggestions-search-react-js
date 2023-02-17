// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredSuggestionsData = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-list-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                value={searchInput}
                onChange={this.onClickSearchInput}
              />
            </div>
            <ul className="suggestion-list-container">
              {filteredSuggestionsData.map(eachSuggestion => (
                <SuggestionItem
                  suggestionDetails={eachSuggestion}
                  key={eachSuggestion.id}
                  clickArrow={this.onClickArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

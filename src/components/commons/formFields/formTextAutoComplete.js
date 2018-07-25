import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const suggestions = []

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
    <div>
    {parts.map((part, index) => {
      return part.highlight ? (
        <span key={String(index)} style={{ fontWeight: 500 }}>
        {part.text}
        </span>
      ) : (
        <strong key={String(index)} style={{ fontWeight: 300 }}>
        {part.text}
        </strong>
      );
    })}
    </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;
  return (
    <Paper {...containerProps} square>
    {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
  ? []
  : suggestions.filter(suggestion =>
    suggestion.label.toLowerCase().slice(0, inputLength) === inputValue
  );
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 40,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  }
});

class TextAutoComplete extends React.Component {
  state = {
    value: '',
    suggestions: [],
  };

  componentWillMount(){
    const { categories } = this.props;
    for(let category of categories) {
      if(!suggestions.find(suggestion => suggestion.label === category.type)) {
        suggestions.push({'label': category.type})
      }
    }
  }

  renderInput = (inputProps) => {
    const { classes, ref, label, touched, error, ...other } = inputProps;
    return (
      <TextField
        error= {touched && error != null}
        {...other}
        inputRef= {ref}
        value={this.state.value ? this.state.value : undefined}
        inputProps={{
          id: label,
        }}
      />
    );
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      value: '',
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleSuggestionSelected = (event, {suggestion}) => {
    this.setState({
      value: suggestion.label,
    });
  };

  render() {
    const {
      classes,
      input,
      label,
      meta: { touched, error },
    } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderInputComponent={this.renderInput}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          onSuggestionSelected={this.handleSuggestionSelected}
          renderSuggestion={renderSuggestion}
          inputProps={{
            classes,
            touched: touched,
            error: error,
            label: label,
            ...input
          }}
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(TextAutoComplete);

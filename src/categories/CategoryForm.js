import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CategoryForm extends PureComponent {

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired
  }

  static defaultProps = {
    text: 'Add'
  }

  constructor(props) {
    super(props);
    const { category = {} } = props;
    
    this.state = {
      name: category.name || null,
      budget: category.budget || null,
      _id: category._id || null,
      timestamp: category.timestamp || null
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, budget, _id, timestamp } = this.state;
    this.props.onComplete({ name, budget, _id, timestamp });
    event.target.reset();
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }

  render() {
    const { name, budget } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <div>Name:<input name="name" value={name} onChange={this.handleChange}/></div>
        <div>Budget:<input name="budget" value={budget} onChange={this.handleChange}/></div>
        <button type="submit">{this.props.text}</button>
      </form>
    );
  }
}
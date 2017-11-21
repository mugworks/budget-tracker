import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';



class Categories extends PureComponent {

  // componentDidMount() {

  // }

  handleAdd = category => {
    this.props.addCategory(category);
  }

  handleUpdate = category => {
    this.props.updateCategory(category);
  }

  handleRemove = _id => {
    this.props.removeCategory(_id);
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <CategoryForm onComplete={this.handleAdd}/>
        <button onClick={this.handleClick}>Add Category</button>
        <ul>
          {categories.map(category => (
          <li key={category._id}>
          <h4>{category.name} at ${category.budget}
          <button onClick={() => this.handleRemove(category._id)}>Remove</button></h4>
            <CategoryForm category={category} text="Update"
            onComplete={this.handleUpdate}/>
          </li>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state
  };
}

export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory }
)(Categories);


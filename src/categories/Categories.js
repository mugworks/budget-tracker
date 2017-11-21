import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
import CategoryForm from './CategoryForm';



class Categories extends PureComponent {

  // componentDidMount() {

  // }

  handleAdd = category => {
    this.props.addCategory(category);
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
          <h4>{category.name} at ${category.budget}</h4>
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
  { addCategory }
)(Categories);


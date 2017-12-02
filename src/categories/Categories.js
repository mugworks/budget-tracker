import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory, loadCategories } from './actions';
import CategoryForm from './CategoryForm';

class Categories extends PureComponent {

  state = {
    editing: false
  }

  componentDidMount() {
    this.props.loadCategories();
  }

  handleAdd = category => {
    this.props.addCategory(category);
  }

  handleUpdate = (id) => {
    console.log('inHandleUpdate', id);
    this.setState({ editing: true });
    // this.props.updateCategory(id);
  }
  
  handleRemove = _id => {
    this.props.removeCategory(_id);
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul>
          {categories.map(category => (
            <li key={category._id} name={category.name} budget={category.budget}>{category.name}{category.budget}<button className="button" onClick={() => this.handleRemove(category._id)}>
              Remove</button><button className="button" onClick={() => this.handleUpdate(category)}>
                Update</button>
            </li>))}
        </ul>
        {/* <CategoryForm category={category} onComplete={this.handleUpdate}/> */}
        <CategoryForm onComplete={this.handleAdd}/>
        <CategoryForm category={categories._id} text="Update"
          onComplete={this.handleUpdate}
        />
        {/* <ul>
          {categories.map(category => (
            <li key={category._id}>
              <CategoryForm category={category} text="Update"
                onComplete={this.handleUpdate}
              />
              <button className="button" onClick={() => this.handleRemove(category._id)}>
              Remove</button>
            </li>))}
        </ul> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in connect', state);
  return {
    categories: state
  };
}

export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory, loadCategories }
)(Categories);
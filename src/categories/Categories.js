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
    console.log('inhandleAdd');
    this.props.addCategory(category);
  }

  handleShowUpdate = (category) => {
    console.log('inHandleShowUpdate', category);
    this.setState({ editing: true });
    // const { name, budget } = this.state;
    console.log('name and budget', category.name, category.budget);
    // this.state.onComplete({ name, budget });
    // this.props.updateCategory(id);
  }

  handleSubmitUpdate = (id) => {
    console.log('inhandleSubmit', id);
    this.props.updateCategory(id);
  }
  
  handleRemove = _id => {
    this.props.removeCategory(_id);
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <table id="table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Budget</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <ListItem key={category._id} name={category.name} budget={category.budget}/>
            ))}
          </tbody>
        </table>
        { this.state.editing ? <CategoryForm text="Update" 
          onComplete={this.handleSubmitUpdate}
        /> :
          <CategoryForm onComplete={this.handleAdd}/>}
      </div>
    );
  }
}

class ListItem extends PureComponent {
  
  render() {
    const { id, name, budget, onShowUpdate, onRemove } = this.props;
    return(
      <tr>
        <td>{ name }</td>
        <td>{ budget }</td>
        <td><button className="button" onClick={() => onRemove(id)}>Remove</button></td>
        <td><button className="button" onClick={() => onShowUpdate(id)}>Update</button></td>
      </tr>
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
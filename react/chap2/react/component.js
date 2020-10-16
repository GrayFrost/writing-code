import { renderComponent } from '../react-dom/render'
export class Component {
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }
  setState(stateChange){
    Object.assign(this.state, stateChange);
    renderComponent( this );
  }
}
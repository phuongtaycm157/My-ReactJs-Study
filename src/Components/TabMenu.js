import React from 'react';
import '../Styles/TabMenu.css';

function Selector (props) {
  return (
    <a href={props.instance.url} className={"option "+props.instance.status}>
      {props.instance.icon}
      <span>{props.instance.title}</span>
    </a>
  );
}

class TabMenu extends React.Component {
  render() {
    const selectors = this.props.instance.map(element => {
      return <Selector instance={element} />
    });
    return (
      <div className="tab-menu">
        {selectors}
      </div>
    );
  }
}

export default TabMenu;
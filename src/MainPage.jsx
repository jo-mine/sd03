import React from 'react';
import ReactDOM from 'react-dom';
import { Toolbar, Page, Button } from 'react-onsenui';

import SecondPage from './SecondPage'

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({ component: SecondPage, props: { value: 1, pankuzu: "MainPage" } });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p>MainPage</p>
        <p style={{ textAlign: 'center' }}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
        </p>
      </Page>
    );
  }
}
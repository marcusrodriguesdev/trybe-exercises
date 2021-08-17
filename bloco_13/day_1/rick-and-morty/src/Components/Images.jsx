import React, { Component } from 'react';

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: '',
      result: false,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate() {
    const { imgPath } = this.state;
    if (imgPath.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  async fetchApi() {
    const requiredApi = await fetch('https://dog.ceo/api/breeds/image/random');
    const executeApi = await requiredApi.json();
    // console.log(executeApi.message);
    this.setState({
      imgPath: executeApi.message,
      result: true,
    });
  }

  render() {
    const { imgPath, result } = this.state;
    return (
      <div>
        <h1>
          My dog random is:
          <main>
            { (result) ? <img src={ imgPath } alt="foto" /> : <span>Loading...</span> }
          </main>
          <button type="button" onClick={ () => this.fetchApi() }>
            next Dog
          </button>
        </h1>
      </div>
    );
  }
}

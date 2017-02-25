const News = React.createClass({
  render: function() {
    return (
      <div className='news'>
        No news today, sorry!
      </div>
    );
  }
});

const Comments = React.createClass({
  render: function() {
    return (
      <div className='comments'>
        No comments!
      </div>
    );
  }
});

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        Hi, I a component App!
        <News />
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


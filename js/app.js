var news = [
  {
    author: 'Джеймс Кезиах Делейни',
    text: 'Строит корабельную империю...'
  },
  {
    author: 'Леонард и Шелдон',
    text: 'Считают себя «великими умами»'
  },
  {
    author: 'Капитан Флинт',
    text: 'Самый грозный пират в Карибском море'
  }
];

const News = React.createClass({
  render: function() {
    const data = this.props.data;

    const newsTemplate = data.map(function (item, i) {
      return (
        <div key={i}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    });

    console.log(newsTemplate);

    return (
      <div className='news'>
        {newsTemplate}
      </div>
    );
  }
});

const Comments = React.createClass({
  render: function() {
    return (
      <div className='comments'>
        Без комментариев!
      </div>
    );
  }
});

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        Привет, я реакт компонент App!
        <News data={news}/>
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


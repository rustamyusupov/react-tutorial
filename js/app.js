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

var Article = React.createClass({
  render: function() {
    var author = this.props.data.author,
        text = this.props.data.text;

    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{text}</p>
      </div>
    )
  }
});

const News = React.createClass({
  render: function() {
    const data = this.props.data;
    let newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function (item, i) {
        return (
          <div key={i}>
            <Article data={item}/>
          </div>
        )
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }

    return (
      <div className='news'>
        {newsTemplate}
        <strong className={'news__count ' + (data.length > 0 ? '':'none') }>Всего новостей: {data.length}</strong>
      </div>
    );
  }
});

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h3>Новости</h3>

        <News data={news}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


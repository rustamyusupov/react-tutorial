const news = [
  {
    author: 'Джеймс Кезиах Делейни',
    text: 'Строит корабельную империю...',
    fullText: 'История разворачивается в 1813 году. Главный герой Джеймс Делани, заядлый искатель приключений и путешественник, возвращается из Африки с пригоршней добытых хитростью алмазов и целью — отомстить за убитого отца. Отказавшись продавать семейный бизнес воротилам из Ост-Индской компании, он решает бросить им вызов, сколотив своё собственное торговое дело и судовладельческую империю. Таким образом, герой вскоре обнаруживает себя в центре невероятно опасной игры, которая может стоить ему всех его денег и самой жизни.'
  },
  {
    author: 'Леонард и Шелдон',
    text: 'Считают себя «великими умами»',
    fullText: 'Два блестящих физика, Леонард и Шелдон, считают себя «великими умами» (суммарный IQ — 360). Но их гениальность ничуть не помогает им общаться с людьми, особенно с женщинами. Всё начинает меняться, когда напротив них поселяется блондинка Пенни. Леонард начинает интересоваться ею, однако Шелдон понимает, что мечтам его друга не суждено сбыться («Вы с ней два разных биологических вида»). У главных героев есть странные друзья: Говард Воловиц, любящий употреблять фразы на шести разных языках, включая русский, и Раджеш Кутраппали, который не может ни слова сказать девушкам, если не выпьет хотя бы немного алкоголя.'
  },
  {
    author: 'Капитан Флинт',
    text: 'Самый грозный пират в Карибском море',
    fullText: '1715 год. Золотой век — вершина пиратства в Карибском море. Остров бывшей британской колонии Нью-Провиденс является территорией беззакония, контролируемый самыми известными пиратскими капитанами в истории. Самым грозным из них является капитан Флинт.Но британский флот возвращается в эти воды, угрожая уничтожить Флинта и его команду. Движимый глубокими, сложными, даже романтическими мотивами, Флинт становится союзником с грозной Элеонорой Гатри, дочерью местного вора в законе, который превращает добычу пиратов в прибыль. Вместе они создают план, охотясь за высшей наградой, выиграв которую, они остановят захват своего дома и обеспечат их выживание.Им противостоит ряд соперников: конкурент капитана, завидующий власти Флинта, отец Элеоноры, чьи амбиции на острове приводят к конфликту с дочерью, и молодой моряк, Джон Сильвер, недавно принятый в экипаж Флинта, которому каким-то образом удается постоянно срывать планы своего капитана.'
  }
];

var Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      fullText: React.PropTypes.string.isRequired
    })
  },

  getInitialState: function() {
    return {
      visible: false
    };
  },

  readMoreHandler: function(e) {
    e.preventDefault();

    this.setState({visible: true});
  },

  render: function() {
    const author = this.props.data.author,
        text = this.props.data.text,
        fullText = this.props.data.fullText,
        visible = this.state.visible;

    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{text}</p>
        <a
          className={'news__read-more' + (visible ? ' none': '')}
          onClick={this.readMoreHandler}
          href="javascript:void(0);">Подробнее...
        </a>
        <p className={'news__full-text' + (visible ? '': ' none')}>{fullText}</p>
      </div>
    )
  }
});

const Add = React.createClass({
  getInitialState: function() {
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },

  componentDidMount: function() {
    this.refs.author.focus();
  },

  onCheckRuleClick: function(e) {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked});
  },

  onFieldChange: function(fieldName, e) {
    this.setState({[fieldName]: !e.target.value.trim().length});
  },

  onBtnClickHandler: function(e) {
    e.preventDefault();

    let author = this.refs.author.value;
    let text = this.refs.text.value;

    alert(author + '\n' + text);
  },

  render: function() {
    let agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        textIsEmpty = this.state.textIsEmpty;

    return (
      <form 
        className='add cf'
        onSubmit={this.onBtnClickHandler}
      >
        <input
          type='text'
          className='add__author'
          onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
          placeholder='Ваше имя'
          ref='author'
        />
        <textarea
          className='add__text'
          onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
          defaultValue=''
          placeholder='Текст новости'
          ref='text'
        />
        <label className='add__checkrule'>
          <input
            defaultChecked={false}
            onChange={this.onCheckRuleClick}
            ref='checkrule'
            type='checkbox'
          />Я согласен с правилами
        </label>
        <button
          className='add__btn'
          disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
          ref='button'
          type='submit'
        >
          Показать alert
        </button>
      </form>
    );
  }
});

const News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
      counter: 0
    };
  },

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
        <strong
          className={'news__count ' + (data.length > 0 ? '':'none') }
          onClick={this.onTotalNewsClick}
        >
          Всего новостей: {data.length}
        </strong>
      </div>
    );
  }
});

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h3>Новости</h3>

        <Add />

        <News data={news}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,

  document.getElementById('root')
);


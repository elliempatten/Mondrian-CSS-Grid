import './App.css';
import React, { Component } from 'react';
import classNames from 'classnames';

const colours = [
  { colour: 'white', column: 1, row: 1, columnSpan: 2, rowSpan: 1 },
  { colour: 'white', column: 3, row: 1, columnSpan: 3, rowSpan: 1 },
  { colour: 'yellow', column: 6, row: 1, columnSpan: 2, rowSpan: 1 },
  { colour: 'white', column: 8, row: 1, columnSpan: 1, rowSpan: 6 },
  { colour: 'white', column: 1, row: 2, columnSpan: 1, rowSpan: 2 },
  { colour: 'red', column: 2, row: 2, columnSpan: 4, rowSpan: 4 },
  { colour: 'white', column: 6, row: 4, columnSpan: 2, rowSpan: 1 },
  { colour: 'white', column: 6, row: 5, columnSpan: 2, rowSpan: 1 },
  { colour: 'yellow', column: 6, row: 2, columnSpan: 2, rowSpan: 2 },
  { colour: 'white', column: 1, row: 4, columnSpan: 1, rowSpan: 3 },
  { colour: 'yellow', column: 1, row: 7, columnSpan: 1, rowSpan: 2 },
  { colour: 'black', column: 2, row: 6, columnSpan: 2, rowSpan: 2 },
  { colour: 'white', column: 4, row: 6, columnSpan: 2, rowSpan: 1 },
  { colour: 'white', column: 4, row: 7, columnSpan: 2, rowSpan: 1 },
  { colour: 'white', column: 6, row: 6, columnSpan: 2, rowSpan: 1 },
  { colour: 'blue', column: 6, row: 7, columnSpan: 2, rowSpan: 2 },
  { colour: 'yellow', column: 1, row: 7, columnSpan: 1, rowSpan: 3 },
  { colour: 'black', column: 4, row: 8, columnSpan: 2, rowSpan: 1 },
  { colour: 'red', column: 8, row: 7, columnSpan: 1, rowSpan: 3 },
  { colour: 'white', column: 2, row: 8, columnSpan: 2, rowSpan: 2 },
  { colour: 'white', column: 4, row: 9, columnSpan: 4, rowSpan: 1 }
];
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="header">Responsive Mondrian with CSS grid</header>
        <div className="main">
          <div className="box">
            {colours.map(colour => {
              const classes = classNames(colour.colour, 'gridItem');
              return (
                <div
                  className={classes}
                  style={{
                    gridColumn: `${colour.column} / span ${colour.columnSpan}`,
                    gridRow: `${colour.row} / span ${colour.rowSpan}`
                  }}
                />
              );
            })}
          </div>
        </div>
        <footer className="footer">
          Made by{' '}
          <a href="https://www.twitter.com/elliempatten">Ellie Patten</a>
        </footer>
      </div>
    );
  }
}

export default App;

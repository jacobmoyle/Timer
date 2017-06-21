var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  handleClick: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props
    var renderStartStopButton = () => {
        if (countdownStatus === 'started') {
          return (
            <div>
              <button className="button secondary" onClick={this.handleClick('paused')}>Pause</button>
              <button className="button alert hollow" onClick={this.handleClick('stopped')}>Clear</button>
            </div>
          )
        } else if (countdownStatus == 'paused') {
          return (
            <div>
              <button className="button primary" onClick={this.handleClick('started')}>Start</button>
              <button className="button alert hollow" onClick={this.handleClick('stopped')}>Clear</button>
            </div>
          )
        } else {
          return <button className="button primary expanded" onClick={this.handleClick('started')}>Start</button>
        }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
      </div>
    )
  }
});

module.exports = Controls;

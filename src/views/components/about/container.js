var Shell = require('shell');
var React = require('react');
var L10nSpan = require('../shared/l10n-span');

var AboutContainer = React.createClass({
  _onFormSubmit: function(event) {
    event.preventDefault();
  },

  _onClickToOpenFlattr: function() {
    var description = '';
    description += 'Kaku is an online music player which supports many ';
    description += 'differnt platform Like YouTube, Vimeo ... etc. With ';
    description += 'Kaku, you can easily listen to all kinds of music with ';
    description += 'just few simple clicks and dont need to leave this ';
    description += 'desktop application.';

    var link = '';
    link += 'https://flattr.com/submit/auto';
    link += '?user_id=EragonJ&url=http%3A%2F%2Fkaku.rocks';
    link += '&title=Kaku&category=software';
    link += '&description=' + encodeURIComponent(description);
    Shell.openExternal(link);
  },

  _onClickToOpenFacebook: function() {
    Shell.openExternal('http://facebook.com/kaku.rocks');
  },

  _onClickToOpenTwitter: function() {
    var link = '';
    link += 'https://twitter.com/intent/tweet?text=';
    link += 'I%20am%20listening%20music%20on%20Kaku%20!';
    link += '%20http%3A%2F%2Fkaku.rocks%20%23kaku_rocks%20';
    Shell.openExternal(link);
  },

  _onClickToOpenGithub: function() {
    Shell.openExternal('https://github.com/EragonJ/Kaku');
  },

  _onClickToOpenGithubIssues: function() {
    Shell.openExternal('https://github.com/EragonJ/Kaku/issues');
  },

  _onClickToOpenGitter: function() {
    Shell.openExternal('https://gitter.im/EragonJ/Kaku');
  },

  _onClickToOpenFacebookDM: function() {
    Shell.openExternal('https://www.facebook.com/messages/kaku.rocks');
  },

  render: function() {
    /* jshint ignore:start */
    return (
      <div className="about-slot">
        <div className="header clearfix">
          <h1>
            <i className="fa fa-fw fa-info"></i>
            <L10nSpan l10nId="about_header"/>
          </h1>
        </div>
        <div className="about-container">
          <p className="well">
            <L10nSpan l10nId="about_intro"/>
          </p>
          <form className="form-horizontal" onSubmit={this._onFormSubmit}>
            <div className="form-group">
              <label className="col-sm-3 control-label">
                <L10nSpan l10nId="about_option_support_intro"/>
              </label>
              <div className="col-sm-3">
                <button
                  className="btn btn-danger"
                  onClick={this._onClickToOpenFlattr}>
                    <i className="fa fa-credit-card"></i>
                    <L10nSpan l10nId="about_option_support_button_wording"/>
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">
                <L10nSpan l10nId="about_option_facebook_intro"/>
              </label>
              <div className="col-sm-3">
                <button
                  className="btn btn-primary"
                  onClick={this._onClickToOpenFacebook}>
                    <i className="fa fa-facebook-official"></i>
                    <L10nSpan l10nId="about_option_facebook_button_wording"/>
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">
                <L10nSpan l10nId="about_option_twitter_intro"/>
              </label>
              <div className="col-sm-3">
                <button
                  className="btn btn-info"
                  onClick={this._onClickToOpenTwitter}>
                    <i className="fa fa-twitter"></i>
                    <L10nSpan l10nId="about_option_twitter_button_wording"/>
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">
                <L10nSpan l10nId="about_option_github_intro"/>
              </label>
              <div className="col-sm-3">
                <button
                  className="btn btn-success"
                  onClick={this._onClickToOpenGithub}>
                    <i className="fa fa-github-alt"></i>
                    <L10nSpan l10nId="about_option_github_button_wording"/>
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">
                <L10nSpan l10nId="about_option_bug_intro"/>
              </label>
              <div className="col-sm-3">
                <button
                  className="btn btn-warning"
                  onClick={this._onClickToOpenGithubIssues}>
                    <i className="fa fa-bug"></i>
                    <L10nSpan l10nId="about_option_bug_button_wording"/>
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">
                <L10nSpan l10nId="about_option_comment_intro"/>
              </label>
              <div className="col-sm-3">
                <button
                  className="btn btn-default"
                  onClick={this._onClickToOpenGitter}>
                    <i className="fa fa-comments-o"></i>
                    <L10nSpan l10nId="about_option_comment_button_wording"/>
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">
                <L10nSpan l10nId="about_option_facebook_dm_intro"/>
              </label>
              <div className="col-sm-3">
                <button
                  className="btn btn-default"
                  onClick={this._onClickToOpenFacebookDM}>
                    <i className="fa fa-comments-o"></i>
                    <L10nSpan l10nId="about_option_facebook_dm_button_wording"/>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
});

module.exports = AboutContainer;

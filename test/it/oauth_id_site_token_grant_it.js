
var common = require('../common');
var helpers = require('./helpers');
var assert = common.assert;

var stormpath = require('../../');

describe('OAuthIdSiteTokenGrantAuthenticator',function(){
  var application;
  var newAccount = helpers.fakeAccount();

  before(function(done){
    helpers.createApplication(function(err,app){
      application = app;
      application.createAccount(newAccount,done);
    });
  });

  after(function(done){
    application.delete(done);
  });

  it('should be constructable with new operator',function(){
    var authenticator = new stormpath.OAuthIdSiteTokenGrantAuthenticator(application);
    assert.instanceOf(authenticator, stormpath.OAuthIdSiteTokenGrantAuthenticator);
  });

  it('should be constructable without new operator',function(){
    var authenticator = new stormpath.OAuthIdSiteTokenGrantAuthenticator(application);
    assert.instanceOf(authenticator, stormpath.OAuthIdSiteTokenGrantAuthenticator);
  });

  it.skip('should create access tokens',function(){
    // This will require a rountrip test with ID site
    // Our express-stormpath module has some test code for this
  });
});
var config = require('./config.conf');
var YouTube = require('../lib/youtube');
var should = require('should');
var chai = require('chai');
var expect = chai.expect; 

describe('Youtube', function() {
  this.timeout(10000);
  it('Require key', function() {
    var mustThrow = function () { new YouTube() };
    expect(mustThrow).to.throw(/Please set a private key./);
  });

  it('getById', function(done) {
    var youTube = new YouTube(config.key);
    youTube.getById(config.id, function(err, response) {
      response.should.have.property('kind', 'youtube#videoListResponse');
      done();
    });
  });

  it('search', function(done) {
    var youTube = new YouTube(config.key);
    youTube.search(config.query, 1, function(err, response) {
      response.should.have.property('kind', 'youtube#searchListResponse');
      done();
    });
  });

  it('related', function(done) {
    var youTube = new YouTube(config.key);
    youTube.related(config.id, 1, function(err, response) {
      response.should.have.property('kind', 'youtube#searchListResponse');
      done();
    });
  });

  it('getPlayListsById', function(done) {
    var youTube = new YouTube(config.key);
    youTube.getPlayListsById(config.playlistId, function(err, response) {
      response.should.have.property('kind', 'youtube#playlistListResponse');
      done();
    });
  });

  it('getPlayListsItemsById', function(done) {
    var youTube = new YouTube(config.key);
    youTube.getPlayListsItemsById(config.playlistId, function(err, response) {
      response.should.have.property('kind', 'youtube#playlistItemListResponse');
      done();
    });
  });

  it('getMostPopular', function(done) {
    var youTube = new YouTube(config.key);
    youTube.getMostPopular(2, function(err, response) {
      response.should.have.property('kind', 'youtube#videoListResponse');
      done();
    });
  });

    it('getMostPopularByCategory', function(done) {
        var youTube = new YouTube(config.key);
        youTube.getMostPopularByCategory(2, 1, function(err, response) {
            response.should.have.property('kind', 'youtube#videoListResponse');
            done();
        });
    });

});

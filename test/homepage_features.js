describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('should have hello world in the body', function(){
    casper.then(function(){
      expect('body').to.contain.text('Hello world');
    });
  });

  it('shoud have TITLE as title', function(){
    casper.then(function(){
      expect('title').to.contain.text('TITLE');
    });
  });
});

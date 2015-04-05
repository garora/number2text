var should = require('chai').should(),
    number2text = require('../index');

 describe('ones', function() {
  
  it('Converts 1 to One', function() {
    number2text(1).should.equal('One');
  });

  it('Converts 2 to Two', function() {
    number2text(2).should.equal('Two');
  });

  it('Converts 3 to Three', function() {
    number2text(3).should.equal('Three');
  });

  it('Converts 4 to One', function() {
    number2text(4).should.equal('Four');
  });

  it('Converts 5 to One', function() {
    number2text(5).should.equal('Five');
  });

  it('Converts 6 to One', function() {
    number2text(6).should.equal('Six');
  });

  it('Converts 7 to One', function() {
    number2text(7).should.equal('Seven');
  });

  it('Converts 8 to One', function() {
    number2text(8).should.equal('Eight');
  });

 it('Converts 9 to One', function() {
    number2text(9).should.equal('Nine');
  });

});

 describe('Tens', function() {
  
  it('Converts 10 to Ten', function() {
    number2text(10).should.equal('Ten');
  });

  it('Converts 20 to Twenty', function() {
    number2text(20).should.equal('Twenty');
  });

  it('Converts 30 to Three', function() {
    number2text(30).should.equal('Thirty');
  });

  it('Converts 40 to Fourty', function() {
    number2text(40).should.equal('Fourty');
  });

  it('Converts 50 to Fifty', function() {
    number2text(50).should.equal('Fifty');
  });

  it('Converts 60 to Sixty', function() {
    number2text(60).should.equal('Sixty');
  });

  it('Converts 70 to Seventy', function() {
    number2text(70).should.equal('Seventy');
  });

  it('Converts 80 to Eighty', function() {
    number2text(80).should.equal('Eighty');
  });

  it('Converts 90 to Ninety', function() {
    number2text(90).should.equal('Ninety');
  });
});

describe('Negative Tests', function() {
  
  it('Test for invalid number. N: Invalid number', function() {
    number2text('Hello').should.equal('Invalid number.');
  });

  it('Test for invalid number. S: in a string', function() {
  	var num = 's';
    number2text(num).should.equal('Invalid number.');
  });

 it('Test for decimal', function() {
    number2text('10.10').should.equal('Currently, currency/decimal support is unavailable.');
  });

it('Out of range - Lower', function() {
    number2text(-1).should.equal('Please enter number between 0 - 999999999.');
  });

it('Out of range - Higher', function() {
    number2text(1000000000).should.equal('Please enter number between 0 - 999999999.');
  });

});

describe('Functional Tests', function() {
  
  it('Converts 9001 to Nine Thousand One', function() {
    number2text(9001).should.equal('Nine Thousand One');
  });
	
	it('Converts 999999999 to Ninety-Nine Crore Ninety-Nine Lakh Ninety-Nine Thousand Nine Hundred Ninety-Nine', function() {
    number2text(999999999).should.equal('Ninety-Nine Crore Ninety-Nine Lakh Ninety-Nine Thousand Nine Hundred Ninety-Nine');
  });

	it('Converts 10000000 to One Crore', function() {
    number2text(10000000).should.equal('One Crore');
  });

	it('Converts 100000000 to Ten Crore', function() {
    number2text(100000000).should.equal('Ten Crore');
  });

	it('Converts 1000000 to One Lakh', function() {
    number2text(100000).should.equal('One Lakh');
  });

	it('Converts 1000000 to Ten Lakh', function() {
    number2text(1000000).should.equal('Ten Lakh');
  });

	it('Converts 10000 to Ten Thousand', function() {
    number2text(10000).should.equal('Ten Thousand');
  });
	it('Converts 1000 to One Thousand', function() {
    number2text(1000).should.equal('One Thousand');
  });

	it('Converts 100 to One Hundred', function() {
    number2text(100).should.equal('One Hundred');
  });

	it('Converts 0 to Zero', function() {
    number2text(0).should.equal('Zero');
  });



});
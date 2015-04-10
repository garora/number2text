var should = require('chai').should(),
    number2text = require('../index');

 describe('ones', function() {
  
  it('Converts 1 to One', function() {
    number2text(1).should.equal('One');
    number2text(1,'english').should.equal('One');
    });

  it('Converts 2 to Two', function() {
    number2text(2).should.equal('Two');
    number2text(2,'english').should.equal('Two');
  });

  it('Converts 3 to Three', function() {
    number2text(3).should.equal('Three');
    number2text(3,'english').should.equal('Three');
  });

  it('Converts 4 to One', function() {
    number2text(4).should.equal('Four');
    number2text(4,'english').should.equal('Four');
  });

  it('Converts 5 to One', function() {
    number2text(5).should.equal('Five');
    number2text(5,'english').should.equal('Five');
  });

  it('Converts 6 to One', function() {
    number2text(6).should.equal('Six');
    number2text(6,'english').should.equal('Six');
  });

  it('Converts 7 to One', function() {
    number2text(7).should.equal('Seven');
    number2text(7,'english').should.equal('Seven');
  });

  it('Converts 8 to One', function() {
    number2text(8).should.equal('Eight');
    number2text(8,'english').should.equal('Eight');
  });

 it('Converts 9 to One', function() {
    number2text(9).should.equal('Nine');
    number2text(9,'english').should.equal('Nine');
  });

});

 describe('Tens', function() {
  
  it('Converts 10 to Ten', function() {
    number2text(10).should.equal('Ten');
    number2text(10,'english').should.equal('Ten');
  });

  it('Converts 20 to Twenty', function() {
    number2text(20).should.equal('Twenty');
    number2text(20,'english').should.equal('Twenty');
  });

  it('Converts 30 to Three', function() {
    number2text(30).should.equal('Thirty');
    number2text(30,'english').should.equal('Thirty');
  });

  it('Converts 40 to Fourty', function() {
    number2text(40).should.equal('Fourty');
    number2text(40,'english').should.equal('Fourty');
  });

  it('Converts 50 to Fifty', function() {
    number2text(50).should.equal('Fifty');
    number2text(50,'english').should.equal('Fifty');
  });

  it('Converts 60 to Sixty', function() {
    number2text(60).should.equal('Sixty');
    number2text(60,'english').should.equal('Sixty');
  });

  it('Converts 70 to Seventy', function() {
    number2text(70).should.equal('Seventy');
    number2text(70,'english').should.equal('Seventy');
  });

  it('Converts 80 to Eighty', function() {
    number2text(80).should.equal('Eighty');
    number2text(80,'english').should.equal('Eighty');
  });

  it('Converts 90 to Ninety', function() {
    number2text(90).should.equal('Ninety');
    number2text(90,'english').should.equal('Ninety');
  });
});

describe('Negative Tests', function() {
  
  it('Test for invalid number. N: Invalid number', function() {
    number2text('Hello').should.equal('Invalid number.');
    number2text('Hello','english').should.equal('Invalid number.');
  });

  it('Test for invalid number. S: in a string', function() {
  	var num = 's';
    number2text(num).should.equal('Invalid number.');
    number2text(num,'english').should.equal('Invalid number.');
  });

 it('Out of range - Lower', function() {
    number2text(-1).should.equal('Please enter +ve number only.');
    number2text(-1,'english').should.equal('Please enter +ve number only.');
  });

});

describe('Functional Tests', function() {
  
  it('Converts 9001 to Nine Thousand One', function() {
    number2text(9001).should.equal('Nine Thousand One');
    number2text(9001,'english').should.equal('Nine Thousand One');
  });
	
	it('Should converts 999999999 to its supplied type', function() {
    number2text(999999999).should.equal('Ninety-Nine Crore Ninety-Nine Lakh Ninety-Nine Thousand Nine Hundred Ninety-Nine');
    number2text(999999999,'english').should.equal('Nine Hundred Ninety-Nine Million Nine Hundred Ninety-Nine Thousand Nine Hundred Ninety-Nine');
  });


	it('Converts 10000000 to One Crore', function() {
    number2text(10000000).should.equal('One Crore');
    number2text(10000000,'english').should.equal('Ten Million');
  });

	it('Converts 100000000 to Ten Crore', function() {
    number2text(100000000).should.equal('Ten Crore');
    number2text(100000000,'english').should.equal('One Hundred Million');
  });

	it('Converts 1000000 to One Lakh', function() {
    number2text(100000).should.equal('One Lakh');
    number2text(100000,'english').should.equal('One Hundred Thousand');
  });

	it('Converts 1000000 to Ten Lakh', function() {
    number2text(1000000).should.equal('Ten Lakh');
    number2text(1000000,'english').should.equal('One Million');
  });

	it('Converts 10000 to Ten Thousand', function() {
    number2text(10000).should.equal('Ten Thousand');
    number2text(10000,'english').should.equal('Ten Thousand');
  });
	it('Converts 1000 to One Thousand', function() {
    number2text(1000).should.equal('One Thousand');
    number2text(1000,'english').should.equal('One Thousand');
  });

	it('Converts 100 to One Hundred', function() {
    number2text(100).should.equal('One Hundred');
    number2text(100,'english').should.equal('One Hundred');
  });

	it('Converts 0 to Zero', function() {
    number2text(0).should.equal('Zero');
  	number2text(0,'english').should.equal('Zero');
  });
});


describe('Conversion Language Tests', function() {
	
	it('Default conversion type is Indian (100000 to One Lakh)', function() {
	    number2text(100000).should.equal('One Lakh');
	    number2text(100000,'').should.equal('One Lakh');
	    number2text(100000).should.equal(number2text(100000,'Indian'));
	  });

	it('English conversion for (1000000 to One Lakh)', function() {
	    number2text(10000000,'english').should.equal('Ten Million');
	  });

	it('French conversion is not available', function() {
	    number2text(1,'french').should.equal('Support for type: french is not available. Available types are: indian,english');
	  });
});

describe('Extra large numbers', function() {
	
	it('Should convert extra large numbers', function() {
	    number2text(1000000000).should.equal('One Hundred Crore');
	    number2text(1000000000,'English').should.equal('One Billion');

	    number2text(1000000000000).should.equal('One Lakh Crore');
	    number2text(1000000000000,'English').should.equal('One Trillion');

	    number2text(1000000000000000).should.equal('Ten Crore Crore'); 
	    number2text(1000000000000000,'English').should.equal('One Quadrillion');

	    number2text(1000000000000000000).should.equal('Ten Thousand Crore Crore'); //High number discrepency in Indian type
	    number2text(1000000000000000000,'English').should.equal('One Quintillion');

	    number2text(10000000000000000000).should.equal('One Lakh Crore Crore'); //High number discrepency in Indian type
	    number2text(10000000000000000000,'English').should.equal('Ten Quintillion');
	  });
});

describe('Decimal Tests', function() {
  
 it('1010.10 should convert to One Thousand Ten Point Ten with default type', function() {
    number2text('1010.10').should.equal('One Thousand Ten Point Ten');
  });

 it('1010.10 should convert to One Thousand Ten Point Ten with type english', function() {
    number2text('1010.10','english').should.equal('One Thousand Ten Point Ten');
  });

 it('Should validate correct type', function() {
    number2text('1010.10',true).should.equal('Please enter valid type.');
  });

 it('Should handle decimal', function() {
    number2text('1010.10','indian').should.equal(number2text('1010.10'));
  });

 it('Should handle decimal using default type', function() {
    number2text('1010.10','',true).should.equal(number2text('1010.10','indian',true));
  });

 it('Should validate types using decimal', function() {
    number2text('1010.10','indian',true).should.not.equal(number2text('1010.10','english',true));
  });

});

describe('Currency Tests', function() {
  
 it('1010.10 should convert to One Thousand And  Ten Rupee And Ten Paise only with default type', function() {
    number2text('1010.10','',true).should.equal('One Thousand And  Ten Rupee And Ten Paise only');
  });

 it('Should handle currency support with default type', function() {
    number2text('1010.10','',false).should.not.equal(number2text('1010.10','',true));
  });

 it('1010.10 should convert to One Thousand And  Ten Dollar And Ten Cent only with type english', function() {
    number2text('1010.10','english',true).should.equal('One Thousand And  Ten Dollar And Ten Cent only');
  });

 it('Should handle currency support with default type', function() {
    number2text('1010.10','english',false).should.not.equal(number2text('1010.10','english',true));
  });

});
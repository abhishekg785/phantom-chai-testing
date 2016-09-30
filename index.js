var phantom = require('phantom')
var expect = require('chai').expect;

  describe('App', function() {
    describe('default page', function() {
      it('test case1 : calculating pay scale for the values 100, 100, 100, 100', function(done) {
        this.timeout(5000);
        phantom.create().then(function(ph) {
          ph.createPage().then(function(page) {
            page.open('solution.html').then(function(status) {
              if(status == 'success'){
                var demo = page.evaluate(function() {
                  var change_event = document.createEvent('HTMLEvents')

                  change_event.initEvent('change', false, true)

                  var base_salary_target = document.getElementById('base_salary');
                  var hra_target = document.getElementById('hra');
                  var travelling_allowance_target = document.getElementById('travelling_allowance');
                  var other_allowance_target = document.getElementById('other_allowance');


                  document.getElementById('base_salary').value = 100
                  document.getElementById('hra').value = 100
                  document.getElementById('travelling_allowance').value = 100
                  document.getElementById('other_allowance').value = 100

                  base_salary_target.dispatchEvent(change_event)
                  hra_target.dispatchEvent(change_event)
                  travelling_allowance_target.dispatchEvent(change_event)
                  other_allowance_target.dispatchEvent(change_event)

                  return document.getElementById('result').value

                }).then(function(result) {
                  // console.log('result' + result);
                  expect(result).to.equal('617');
                  done()
                }).catch(function(error) {
                  done(error);
                });
              }
              else{
                done(new Error("unable to load index.html"))
              }
            });
          });
        });
      })

      it('test case2 : calculating pay scale for the values 350, 0, 0, 100', function(done) {
        this.timeout(5000);
        phantom.create().then(function(ph) {
          ph.createPage().then(function(page) {
            page.open('solution.html').then(function(status) {
              if(status == 'success'){
                var demo = page.evaluate(function() {
                  var change_event = document.createEvent('HTMLEvents')

                  change_event.initEvent('change', false, true)

                  var base_salary_target = document.getElementById('base_salary');
                  var hra_target = document.getElementById('hra');
                  var travelling_allowance_target = document.getElementById('travelling_allowance');
                  var other_allowance_target = document.getElementById('other_allowance');


                  document.getElementById('base_salary').value = 350
                  document.getElementById('hra').value = 0
                  document.getElementById('travelling_allowance').value = 0
                  document.getElementById('other_allowance').value = 100

                  base_salary_target.dispatchEvent(change_event)
                  hra_target.dispatchEvent(change_event)
                  travelling_allowance_target.dispatchEvent(change_event)
                  other_allowance_target.dispatchEvent(change_event)

                  return document.getElementById('result').value

                }).then(function(result) {
                  // console.log('result' + result);
                  expect(result).to.equal('999.5');
                  done()
                }).catch(function(error) {
                  done(error);
                });
              }
              else{
                done(new Error("unable to load index.html"))
              }
            });
          });
        });
      })

      it('test case3 : calculating pay scale for the values 350, 0, 0, 100', function(done) {
        this.timeout(5000);
        phantom.create().then(function(ph) {
          ph.createPage().then(function(page) {
            page.open('solution.html').then(function(status) {
              if(status == 'success'){
                var demo = page.evaluate(function() {
                  var change_event = document.createEvent('HTMLEvents')

                  change_event.initEvent('change', false, true)

                  var base_salary_target = document.getElementById('base_salary');
                  var hra_target = document.getElementById('hra');
                  var travelling_allowance_target = document.getElementById('travelling_allowance');
                  var other_allowance_target = document.getElementById('other_allowance');


                  document.getElementById('base_salary').value = 25000
                  document.getElementById('hra').value = 9800
                  document.getElementById('travelling_allowance').value = 1600
                  document.getElementById('other_allowance').value = 8800

                  base_salary_target.dispatchEvent(change_event)
                  hra_target.dispatchEvent(change_event)
                  travelling_allowance_target.dispatchEvent(change_event)
                  other_allowance_target.dispatchEvent(change_event)

                  return document.getElementById('result').value

                }).then(function(result) {
                  // console.log('result' + result);
                  expect(result).to.equal('87050');
                  done()
                }).catch(function(error) {
                  done(error);
                });
              }
              else{
                done(new Error("unable to load index.html"))
              }
            });
          });
        });
      })
    });
  });

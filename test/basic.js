
var should      = require("should")
var harp        = require("harp")
var Nightmare   = require("nightmare")

describe("nightmare", function(){

  before(function(done){
    harp.server(__dirname + "/../app", { port: 9001 }, done)
  })

  it("should do stuff", function(done){
    new Nightmare()
    .goto('http://localhost:9001')
    .evaluate(function(){
      return document.querySelector('h1')
    }, function(el){
      el.innerText.should.equal("Hello World")
    }).run(done)
  })

})
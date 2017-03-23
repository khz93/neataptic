var Methods = {
  Connection : require('./connection'),
  Cost       : require('./cost'),
  Crossover  : require('./crossover'),
  Generation : require('./generation'),
  Mutate   : require('./mutate'),
  Selection  : require('./selection'),
  Squash     : require('./squash')
};

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd)
{
  define([], function(){ return Methods });
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Methods;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var oldMethods = window['methods'];
    Methods.ninja = function(){
      window['methods'] = oldMethods;
      return Methods;
    };
  })();

  window['methods'] = Methods;
}

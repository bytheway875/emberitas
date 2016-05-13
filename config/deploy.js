module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'emberitas',
      key: process.env.PAGEFRONT_KEY
    }
  };
};

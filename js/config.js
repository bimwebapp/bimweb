var QBApp =  {
  appId: 31423,
  authKey: 'dvyjByHmA2kBbZB',
  authSecret: 'E7snSJew5TrRneW'
};

var config = {
  chatProtocol: {
    active: 2
  },
  debug: {
    mode: 1,
    file: null
  }
};

var QBUser1 = {
    },
    QBUser2 = {
    };

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);

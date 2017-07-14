bitcoin.networks.shadow = {
  magicPrefix: '\x19ShadowCash Signed Message:\n',
  bip32: {
    public: 0xEE80286A,
    private: 0xEE8031E8
  },
  pubKeyHash: 0x3f,
  scriptHash: 0x7d,
  wif: 0xbf,
  dustThreshold: 0,
  feePerKb: 1000,
  estimateFee: function() { return "unused in this app" },
};

bitcoin.networks.shadowtn = {
  magicPrefix: '\x19ShadowCash Signed Message:\n',
  bip32: {
    public: 0x76C0FDFB,
    private: 0x76C1077A
  },
  pubKeyHash: 0x7f,
  scriptHash: 0xc4,
  wif: 0xff,
  dustThreshold: 0,
  feePerKb: 1000,
  estimateFee: function() { return "unused in this app" },
};

bitcoin.networks.clam = {
  bip32: {
    public: 0xa8c26d64,
    private: 0xa8c17826
  },
  pubKeyHash: 0x89,
  wif: 0x85,
};

bitcoin.networks.particl = {
  bip32: {
    public: 0x696e82d1,
    private: 0x8f1daeb8
  },
  pubKeyHash: 0x38,
  scriptHash: 0x3C,
  wif: 0x6C,
};

bitcoin.networks.particltn = {
  bip32: {
    public: 0xe1427800,
    private: 0x04889478
  },
  pubKeyHash: 0x76,
  scriptHash: 0x7a,
  wif: 0x2e,
};

bitcoin.networks.dash = {
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x4c,
  scriptHash: 0x10,
  wif: 0xcc,
};

bitcoin.networks.namecoin = {
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x34,
  //scriptHash: 0x10,
  wif: 0x80,
};

bitcoin.networks.peercoin = {
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x37,
  //scriptHash: 0x10,
  wif: 0xb7,
};


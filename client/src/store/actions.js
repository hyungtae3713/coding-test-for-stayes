const req = require.context('.', true, /\.\/resources\/.+\/action\.js$/);

module.exports.ACTION_TYPES = { };

const ONLY_UPPERCASE_REGEX = /^[A-Z_0-9]+$/;

req.keys().forEach((key) => {
  const action = req(key).default;
  
  Object.keys(action).forEach((name) => {
    if(ONLY_UPPERCASE_REGEX.test(name))
        module.exports.ACTION_TYPES[name] = name;
    else
      module.exports[name] = action[name];
  });
});
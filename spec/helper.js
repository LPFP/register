var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'Addmember-darwin-x64', 'Addmember.app', 'Contents', 'MacOS', 'Addmember');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'Addmember-linux-x64', 'Addmember');
      default:
        throw 'Unsupported platform';
    }
  }
};

'use strict';

module.exports = function(SuperbGenerator) {

  /**
   * Where you write the generator specific files
   * @type {Object}
   */
  SuperbGenerator.prototype.writing = {
    /*
     * Aplly templating on files
     */
    copyTpl: function copyTpl() {
      this.fs.copyTpl(this.templatePath() + '/**', this.destinationPath(), this.props);
    },

    /*
     * Move them
     */
    move: function move() {
      var mv = function(from, to) {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      }.bind(this);

      mv('_package.json', 'package.json');
      mv('_travis.yml', 'travis.yml');
      mv('editorconfig', '.editorconfig');
      mv('gitattributes', '.gitattributes');
      mv('gitignore', '.gitignore');
    },

    recap: function recap() {
      console.log('writing ');
    }
  };

};

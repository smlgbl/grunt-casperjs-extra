grunt-casperjs-extra
====================

![Build Status](https://travis-ci.org/smlgbl/grunt-casperjs-extra.png?branch=master)

Take care of installation of [casperjs](http://casper.org) and [phantomjs](http://phantomjs.org) and run casperjs tests using [grunt](http://www.gruntjs.com)

warning!
========

This will install the current master branch of CasperJS, which includes the new testing layout. See the test example in tests/.

why, oh why?
============

phantomjs is available as an [npm](http://npmjs.org) package, also used e.g. by [grunt-contrib-jasmine](https://github.com/gruntjs/grunt-contrib-jasmine) to run unittests. Theoretically casperjs could be available as well, but their package.json names an unusable dependency. Of course, from their point of view this makes sense, because casperjs is not meant to be used as a node package. But from a packaging point of view, it does make sense.
What we want: just call 'grunt casperjs', which will execute our casperjs tests. Therefore this package. Please try it and let me know if you have a better way of handling the PATH problem that comes up.
Please also keep an eye on the original [issue](https://github.com/n1k0/casperjs/issues/462), which should be the ultimate solution and make this quickfix obsolete.

but how?
========
This is done by using a fork of casperjs with a modified package.json (see here: ), so that the phantomjs dependency can be resolved, without the need to manually install it. The grunt-env plugin is used to set the PATH where casperjs was downloaded (via GIT) and to tell casperjs where to find phantomjs.

what to do?
===========

```shell
   sudo npm install -g grunt
   git clone git@github.com:smlgbl/grunt-casperjs-extra.git
   cd grunt-casperjs-extra/
   npm install
   grunt
```

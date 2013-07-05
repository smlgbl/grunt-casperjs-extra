grunt-casperjs-extra
====================

Take care of installation of casperjs and phantomjs and run casperjs tests using grunt

This is done by using a casperjs git branch with a modified package.json, so that the phantomjs dependency can be resolved, without the need to manually install it. The grunt-env plugin is used to set the PATH where casperjs was downloaded (via GIT) and to tell casperjs where to find phantomjs.

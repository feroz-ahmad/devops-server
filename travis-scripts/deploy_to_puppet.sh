#!/bin/bash
cd $TRAVIS_BUILD_DIR/project
echo "-- Deploying to Puppet --"
wget -qO- https://pipelines.puppet.com/download/client | sh
echo "DistelliAccessToken:" " '$DistelliAccessToken'" >> ~/distelli.yml
echo "DistelliSecretKey:" "'$DistelliSecretKey'" >> ~/distelli.yml
/usr/local/bin/distelli login -conf ~/distelli.yml
/usr/local/bin/distelli deploy -q -y -m "Deployment from Travis-CI" --env dev
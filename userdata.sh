#!/bin/bash
echo "DistelliAccessToken: '1VINJ4O2CXOHV00B6KWC3R906I'" > /etc/distelli.yml
echo "DistelliSecretKey: '118ucudjcdp808iqk0ngfktvykt2ytu76gd4a'" >> /etc/distelli.yml
echo "Environments:" >> /etc/distelli.yml
echo "  - dev" >> /etc/distelli.yml
wget -qO- https://pipelines.puppet.com/download/client | sh
sudo /usr/local/bin/distelli agent install -conf /etc/distelli.yml
sudo /usr/local/bin/distelli login -conf /etc/distelli.yml
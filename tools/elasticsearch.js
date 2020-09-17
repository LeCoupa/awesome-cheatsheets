/* *******************************************************************************************
 * ELASTICSEARCH
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
 * https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
 * ******************************************************************************************* */

sudo service elasticsearch status -l  // Check elasticsearch status
sudo service elasticsearch restart    // Restart elasticsearch
sudo service kibana restart           // Restart kibana

sudo /usr/share/elasticsearch/bin/elasticsearch --version // Check ElasticSearch version
sudo /usr/share/kibana/bin/kibana --version               // Check kibana version

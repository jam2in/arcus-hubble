/*
 * arcus-hubble - A dashboard service to monitor Arcus clusters
 * Copyright 2012-2014 NAVER Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var conf = require('../conf/conf-view.json')
var express  = require('express');
var app      = express();

app.configure(function() {
  app.use(express.static(__dirname + '/../view'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

port = conf.port || 8080;
app.listen(port);
console.log("App listening on port " + port);

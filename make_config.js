var fs = require('fs');
var mustache = require('mustache');
var process = require('process');

var config_template = fs.readFileSync("config.json.template", "utf8");
var dashboard_config = mustache.render(config_template, process.env);

fs.writeFile("config.json", dashboard_config, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});





//
// v23web.js
// YAML v.2 to v.3 converter for web. The whole conversion table is in function convert()
//

//var fs = require('fs');
//var yaml = require("./lib/js-yaml.js");

/*
try {
  var fileName = process.argv.slice(2)[0];
  console.log("Processing %s", fileName);
  var v2 = yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
  if (v2.version != "v2") {
    console.log("\nERROR: %s is not a V2 YAML\n", fileName);

  }
  var v3 = convert(v2);
  let yamlStr = yaml.safeDump(v3);
  fs.writeFileSync('V3_' + fileName, yamlStr, 'utf8');
  console.log("Converted successfully --> V3_%s", fileName);

} catch (e) {
    console.log(e);
} */

function convert(v2) {
//
// Straightforward conversion. Use default #TODO or [] placeholders where conversion is more difficult
//
  var v3 = {
    "version": "v3",
    "navigator": {
      "name": v2.navigator.name?v2.navigator.name:"#TODO",
      "email": v2.navigator.email?v2.navigator.email:"#TODO"
    },
    "tickets": {
      "engImportTicket": v2.tickets.engImportTicket?v2.tickets.engImportTicket:"#TODO",
      "devHubTicket": v2.tickets.devHubTicket?v2.tickets.devHubTicket:"#TODO",
      "dockerTicket": v2.tickets.dockerTicket?v2.tickets.dockerTicket:"#TODO",
      "devSpacesTicket": v2.tickets.devSpacesTicket?v2.tickets.devSpacesTicket:"#TODO"
    },
    "companyName": v2.repo.companyName?v2.repo.companyName:"#TODO",
    "productName": v2.repo.productName?v2.repo.productName:"#TODO",
    "c4containerName": v2.deploy?v2.deploy.serviceName?v2.deploy.serviceName:"#TODO":"#TODO",
    "masterCicdProductYaml": "#TODO",
    "repoUrl": v2.repo.repoUrl?v2.repo.repoUrl:"#TODO",
    "repoBranch": "master",
    "githubTeamName": "#TODO",
    "needsLowLevelHardwareAccess": "#TODO",
    "needsDockerServer": "#TODO",
    "type": "#TODO",
    "buildAndDistribute": {
      "sourceDependencies": {},
      "triggerOnSuccessOf": {},
      "envVars": [],
      "os": v2.build.buildOs?v2.build.buildOs:"#TODO",
      "techStack": v2.build.techStack?v2.build.techStack:"#TODO",
      "toolchainVersion": v2.build.toolchainVersion?v2.build.toolchainVersion:"#TODO",
      "runtimeVersion": v2.build.runtimeVersion?v2.build.runtimeVersion:"#TODO",
      "caching": {
        "folder": {}
      },
      "build": {
        "tool": v2.build.buildTool?v2.build.buildTool:"#TODO",
        "preBuildCommand": v2.build.preBuild?v2.build.preBuild:"#TODO",
        "buildCommand": v2.build.buildCommand?v2.build.buildCommand:"#TODO"
      },
      "test": {
        "utFramework": v2.test.utFramework?v2.test.utFramework:"#TODO",
        "testCommand": v2.test.testCommand?v2.test.testCommand:"#TODO",
        "coverageReport": {
          "type": "Cobertura",
          "path": "#TODO"
        },
        "testReport": {
          "type": "#TODO",
          "path": "#TODO"
        }
      },
      "package": {
        "tool": v2.package.packageTool?v2.package.packageTool:"#TODO",
        "command": v2.package.packageCommand?v2.package.packageCommand:"#TODO",
        "artifactDir": v2.package.artifactDir?v2.package.artifactDir : "#TODO"
      },
      "distribution": {
        "artifactUploadCommand": v2.package.artifactUploadCommand ? v2.package.artifactUploadCommand : "#TODO"
      },
      "requiresIntegrationTests": "#TODO"
    },
    "deployment": {
      "dependentServices": "#TODO",
      "serviceName": v2.deployment?v2.deployment.serviceName ? v2.deployment.serviceName : "#TODO":"#TODO",
      "overridableProps": {
        "guiType": "#TODO",
        "envVars": {
          "key" : v2.envVars ? v2.envVars.key ? v2.envVars.key :"#TODO":"#TODO",
          "secret": v2.envVars ? v2.envVars.secret ? v2.envVars.secret:"#TODO":"#TODO",
          "service": v2.envVars ? v2.envVars.service ? v2.envVars.service:"#TODO":"#TODO",
          "secretId": v2.envVars ? v2.envVars.secretId ? v2.envVars.secretId:"#TODO":"#TODO",
          "value": v2.envVars ? v2.envVars.value ? v2.envVars.value:"#TODO":"#TODO"
        },
        "ports": [],
        "stickySessions": v2.deploy? v2.deploy.stickySessions ? v2.deploy.stickySessions: "#TODO":"#TODO",
        "canUseLb": v2.deploy? v2.deploy.canUseLb ? v2.deploy.canUseLb : "#TODO":"#TODO",
        "stablePersistence": v2.deploy?v2.deploy.stablePersistence ? v2.deploy.stablePersistence : "#TODO":"#TODO",
        "fixedNetworkIdentifier": v2.deploy?v2.deploy.fixedNetworkIdentifier ? v2.deploy.fixedNetworkIdentifier : "#TODO":"#TODO",
        "storage": [],
        "provision": {
          "os": "#TODO",
          "prepareEnvCommand": "#TODO",
          "command": "#TODO",
          "checkCommand": "#TODO"
        },
       "install": {
          "dockerized": v2.run?v2.run.dockerized ? v2.run.dockerized : "#TODO":"#TODO",
          "runtimeOs": v2.run?v2.run.runtimeOs ? v2.run.runtimeOs : "#TODO":"#TODO",
          "runtimeEnv": v2.run?v2.run.runtimeEnv ? v2.run.runtimeEnv : "#TODO":"#TODO",
          "installCommand": v2.run?v2.run.installScript ? v2.run.installScript : "#TODO":"#TODO"
       },
       "run": {
          "mode": "#TODO",
          "command": v2.run?v2.run.runCommand ? v2.run.runCommand : "#TODO":"#TODO",
          "userName": v2.run?v2.run.userName ? v2.run.userName : "#TODO":"#TODO"
       },
       "deploymentCheck": {
        "exec": {
          "command": v2.deploy?v2.deploy.deploymentCheck ? v2.deploy.deploymentCheck : "#TODO":"#TODO"
        },
        "httpGet": {
          "path": "#TODO #OPTIONAL",
          "port": "#TODO #OPTIONAL",
          "ssl": "#TODO #OPTIONAL",
          "verify": "#TODO #OPTIONAL",
          "httpHeaders": [
            {
              "name": "#TODO #OPTIONAL",
              "value": "#TODO #OPTIONAL"
            }
          ]
        },
        "tcpSocket": {
          "port": "#TODO #OPTIONAL"
        }
       },
       "integrationTest": {
        "preTestCommand": "#TODO #OPTIONAL",
        "testCommand": "#TODO #OPTIONAL"
       }
      },
      "targets": [
        {
          "name": "Default",
          "dev": {},
          "qa": {
            "install": {
              "installCommand": v2.deploy_qa ? v2.deploy_qa.deploy.deployCommand ? v2.deploy_qa.deploy.deployCommand: "#TODO":"#TODO"
            },
            "deploymentCheck": {
              "exec": {
                "command": v2.deploy_qa ? v2.deploy_qa.deploy.deploymentCheck ?v2.deploy_qa.deploy.deploymentCheck : "#TODO":"#TODO"
              }
            }
          },
          "reg": {},
          "stage": {
            "install": {
              "installCommand": v2.deploy_stage ? v2.deploy_stage.deploy.deployCommand ? v2.deploy_stage.deploy.deployCommand : "#TODO":"#TODO"
            },
            "deploymentCheck": {
              "exec": {
                "command": v2.deploy_stage ? v2.deploy_stage.deploy.deploymentCheck ? v2.deploy_stage.deploy.deploymentCheck : "#TODO":"#TODO"
              }
            }
          },
          "prod": {}
        }
      ]
    }
  }

//
// More complex conversions: update placeholders
//

  // switch
  var oldType = v2.repo? v2.repo.repoType?v2.repo.repoType:null:null;
  if (oldType) {
    switch (oldType) {
      case "Final deployable":
        v3.type = "Deployable service";
        break;
      case "Distributable artifacts":
        v3.type = "Distributable artifacts";
        break;
      case "Deployable third party service":
        v3.type = "Self hosted third party service";
        break;
      case "Third party managed service":
        v3.type = "Third party managed service";
        break;
      default:
        v3.type = "#TODO";
        break;
    }
  } else v3.type = "#TODO";

  //arrays
  v3.buildAndDistribute.envVars = v2.buildenvVars?v2.buildenvVars:[];
  v3.deployment.overridableProps.ports = v2.ports?v2.ports:[];
  v3.deployment.overridableProps.storage = v2.storage?v2.storage:[];

  return v3;
}

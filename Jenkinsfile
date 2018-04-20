node {

    // Read in the Jenkins workflow config values
    def jnkPipelineConfig = readFile('Jenkinsfile.json');
    def config = new groovy.json.JsonSlurperClassic().parseText(jnkPipelineConfig);
    println "Pipeline config ==> ${config}";

    // Check if pipeline is enabled
    if (!config.pipeline.enabled){
      println "pipeline disabled"
      return
    }


    stage('Build')
   {
        echo "Source Code Checkout..."
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'c973bcae-92f0-4b6d-8d41-559ee01a86c1', url: 'https://github.com/tumbone/AngPassAuth']]])
   }
    stage('Test') {
        echo "Running tests..."
    }
    stage ('Deploy') {
        echo "Deployment in progress..."
    }
    
}
node {
    // Source code Checkout
     checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'c973bcae-92f0-4b6d-8d41-559ee01a86c1', url: 'https://github.com/tumbone/AngPassAuth']]])
    
    // Read in the Jenkins workflow config values
    def jnkPipelineConfig = readFile('Jenkinsfile.json');
    def config = new groovy.json.JsonSlurperClassic().parseText(jnkPipelineConfig);
    // println "Pipeline config ==> ${config}";

    // Check if pipeline is enabled
    if (!config.pipeline.enabled){
      println "Pipeline DISABLED"
      return
    }

    // Set Git env vars required for image tagging
    def gitEnvVars() {
      sh 'git rev-parse HEAD > git_commit_id.txt'
      try {
        env.GIT_COMMIT_ID = readFile('git_commit_id.txt').trim()
        env.GIT_SHA = env.GIT_COMMIT_ID.substring(0,7)
      } catch (e) {
        error "${e}"
      }
      println "env.GIT_COMMIT_ID ==> ${env.GIT_COMMIT_ID}"
      println "Git commit sha ==> ${env.GIT_SHA}"
    }

    gitEnvVars()

    stage('Build')
   {
        echo "Build the code artefacts..."
       
   }
    stage('Test') {
        echo "Running tests..."
    }
    stage ('Deploy') {
        echo "Deployment in progress..."
    }
    
}
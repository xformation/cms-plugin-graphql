pipeline {
  agent {
    docker {
      image 'papu'
    }

  }
  stages {
    stage('Stage1') {
      steps {
        sh 'echo "papu"'
      }
    }
  }
  environment {
    ssss = 'sss'
  }
}
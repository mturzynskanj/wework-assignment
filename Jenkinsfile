pipeline {
  agent any
  stages {
    stage('stage1') {
      steps {
        echo 'This is a build $BUILD_NUMBER of demo $DEMO'
        sh '"This is a demo $DEMO"'
      }
    }

  }
  environment {
    DEMO = '1'
  }
}
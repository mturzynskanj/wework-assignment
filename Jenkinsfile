pipeline {
  agent any
  stages {
    stage('stage1') {
      steps {
        echo 'This is a build $BUILD_NUMBER of demo $DEMO'
        sh '"This is a demo $DEMO"'
        sh 'echo "This is build $BUILD_NUMBER OF demo $DEMO"'
        sh 'echo "This is a $DEMO"'
      }
    }

  }
  environment {
    DEMO = '1'
  }
}
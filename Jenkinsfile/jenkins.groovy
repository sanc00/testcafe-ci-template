pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('TestCafe Tests') {
            steps {
              sh 'npm test'
            }
        }
    }
}
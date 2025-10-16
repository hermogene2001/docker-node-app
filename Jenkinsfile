pipeline {
    agent any

    tools {
        nodejs "Node18"
    }
 
    stages {
        stage('Verify Tools'){
        steps{
            sh 'npm -v'
            sh 'node -n'

        }
        stage('Install Dependencies'){
            steps{
                bat:'npm install'
            }
        }
        stage('Clone') {
            steps {
                git 'https://github.com/hermogene2001/my-web-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic test...'
                sh 'node -v'
            }
        }
    }
}


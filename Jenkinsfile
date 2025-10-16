pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    stages {
        stage('Verify Tools') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Clone') {
            steps {
                git 'https://github.com/hermogene2001/my-web-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Build complete (if any build process is needed).'
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
